/*
Copyright 2018 - 2022 The Alephium Authors
This file is part of the alephium project.

The library is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with the library. If not, see <http://www.gnu.org/licenses/>.
*/

import { alephiumProvider, AlephiumWindowObject, getWalletObject, isWalletObj } from '@alephium/get-extension-wallet'

export type InjectedProviderListener = (providers: AlephiumWindowObject[]) => void

function createProviderStore() {
  const listeners: Set<InjectedProviderListener> = new Set()
  let allProviders: AlephiumWindowObject[] = []

  const addNewProvider = (provider: AlephiumWindowObject) => {
    if (allProviders.find((p) => p.icon === provider.icon) === undefined) {
      allProviders.push(provider)
      listeners.forEach((listener) => listener([...allProviders]))
    }
  }

  const detectProviders = () => {
    if (typeof window !== 'undefined') {
      const oneKeyProvider = window['alephium']
      if (!!oneKeyProvider && isWalletObj(oneKeyProvider)) {
        addNewProvider(oneKeyProvider)
      }

      const defaultProvider = getWalletObject(alephiumProvider.id)
      if (defaultProvider !== undefined) {
        addNewProvider(defaultProvider)
      }

      const handler = (event) => {
        if (!!event.detail && isWalletObj(event.detail.provider)) {
          addNewProvider(event.detail.provider)
        }
      }
      window.addEventListener('announceAlephiumProvider', handler)
      window.dispatchEvent(new Event('requestAlephiumProvider'))
      return () => window.removeEventListener('announceAlephiumProvider', handler)
    }
    return undefined
  }

  let cancel = detectProviders()

  return {
    getProviders: () => {
      return allProviders
    },
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    reset: () => {
      allProviders = []
      cancel?.()
      cancel = detectProviders()
    }
  }
}

export const injectedProviderStore = createProviderStore()