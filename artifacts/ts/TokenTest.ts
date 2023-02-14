/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  web3,
  SignerProvider,
  Address,
  DeployContractParams,
  DeployContractResult,
  Contract,
  ContractState,
  node,
  binToHex,
  TestContractResult,
  Asset,
  HexString,
  ContractFactory,
  contractIdFromAddress,
  ONE_ALPH,
  groupOfAddress,
  fromApiVals,
  subscribeToEvents,
  SubscribeOptions,
  Subscription,
  EventSubscription,
  randomTxId,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeEventsFromContract,
  decodeContractCreatedEvent,
  decodeContractDestroyedEvent,
  ContractCreatedEvent,
  ContractDestroyedEvent,
} from "@alephium/web3";
import { default as TokenTestContractJson } from "../token_test.ral.json";

export namespace TokenTest {
  export type Fields = {
    symbol: HexString;
    name: HexString;
    decimals: bigint;
    totalSupply: bigint;
  };

  export type State = ContractState<Fields>;

  export class Factory extends ContractFactory<TokenTestInstance, Fields> {
    constructor(contract: Contract) {
      super(contract);
    }

    at(address: string): TokenTestInstance {
      return new TokenTestInstance(address);
    }
  }

  // This is used for testing contract functions
  export function stateForTest(
    initFields: Fields,
    asset?: Asset,
    address?: string
  ): ContractState<TokenTest.Fields> {
    const newAsset = {
      alphAmount: asset?.alphAmount ?? ONE_ALPH,
      tokens: asset?.tokens,
    };
    return TokenTest.contract.toState(initFields, newAsset, address);
  }

  export async function testGetSymbolMethod(
    params: Omit<TestContractParams<TokenTest.Fields, {}>, "testArgs">
  ): Promise<Omit<TestContractResult, "returns"> & { returns: HexString }> {
    const txId = params?.txId ?? randomTxId();
    const apiParams = TokenTest.contract.toApiTestContractParams("getSymbol", {
      ...params,
      txId: txId,
      testArgs: {},
    });
    const apiResult = await web3
      .getCurrentNodeProvider()
      .contracts.postContractsTestContract(apiParams);
    const testResult = TokenTest.contract.fromApiTestContractResult(
      0,
      apiResult,
      txId
    );
    TokenTest.contract.printDebugMessages(
      "getSymbol",
      testResult.debugMessages
    );
    const testReturns = testResult.returns as [HexString];
    return {
      ...testResult,
      returns: testReturns[0],
    };
  }

  export async function testGetNameMethod(
    params: Omit<TestContractParams<TokenTest.Fields, {}>, "testArgs">
  ): Promise<Omit<TestContractResult, "returns"> & { returns: HexString }> {
    const txId = params?.txId ?? randomTxId();
    const apiParams = TokenTest.contract.toApiTestContractParams("getName", {
      ...params,
      txId: txId,
      testArgs: {},
    });
    const apiResult = await web3
      .getCurrentNodeProvider()
      .contracts.postContractsTestContract(apiParams);
    const testResult = TokenTest.contract.fromApiTestContractResult(
      1,
      apiResult,
      txId
    );
    TokenTest.contract.printDebugMessages("getName", testResult.debugMessages);
    const testReturns = testResult.returns as [HexString];
    return {
      ...testResult,
      returns: testReturns[0],
    };
  }

  export async function testGetDecimalsMethod(
    params: Omit<TestContractParams<TokenTest.Fields, {}>, "testArgs">
  ): Promise<Omit<TestContractResult, "returns"> & { returns: bigint }> {
    const txId = params?.txId ?? randomTxId();
    const apiParams = TokenTest.contract.toApiTestContractParams(
      "getDecimals",
      {
        ...params,
        txId: txId,
        testArgs: {},
      }
    );
    const apiResult = await web3
      .getCurrentNodeProvider()
      .contracts.postContractsTestContract(apiParams);
    const testResult = TokenTest.contract.fromApiTestContractResult(
      2,
      apiResult,
      txId
    );
    TokenTest.contract.printDebugMessages(
      "getDecimals",
      testResult.debugMessages
    );
    const testReturns = testResult.returns as [bigint];
    return {
      ...testResult,
      returns: testReturns[0],
    };
  }

  export async function testGetTotalSupplyMethod(
    params: Omit<TestContractParams<TokenTest.Fields, {}>, "testArgs">
  ): Promise<Omit<TestContractResult, "returns"> & { returns: bigint }> {
    const txId = params?.txId ?? randomTxId();
    const apiParams = TokenTest.contract.toApiTestContractParams(
      "getTotalSupply",
      {
        ...params,
        txId: txId,
        testArgs: {},
      }
    );
    const apiResult = await web3
      .getCurrentNodeProvider()
      .contracts.postContractsTestContract(apiParams);
    const testResult = TokenTest.contract.fromApiTestContractResult(
      3,
      apiResult,
      txId
    );
    TokenTest.contract.printDebugMessages(
      "getTotalSupply",
      testResult.debugMessages
    );
    const testReturns = testResult.returns as [bigint];
    return {
      ...testResult,
      returns: testReturns[0],
    };
  }

  export const contract = Contract.fromJson(
    TokenTestContractJson,
    "",
    "d9c9fab84f779f2e90ca9e9b1fafd6d9c9dc0f8b84256169e20961f9c917bab8"
  );
  export const factory = new Factory(contract);
}

export class TokenTestInstance {
  readonly address: Address;
  readonly contractId: string;
  readonly groupIndex: number;

  constructor(address: Address) {
    this.address = address;
    this.contractId = binToHex(contractIdFromAddress(address));
    this.groupIndex = groupOfAddress(address);
  }

  async fetchState(): Promise<TokenTest.State> {
    const contractState = await web3
      .getCurrentNodeProvider()
      .contracts.getContractsAddressState(this.address, {
        group: this.groupIndex,
      });
    const state = TokenTest.contract.fromApiContractState(contractState);
    return {
      ...state,
      fields: state.fields as TokenTest.Fields,
    };
  }

  subscribeContractCreatedEvent(
    options: SubscribeOptions<ContractCreatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeEventsFromContract(
      options,
      this.address,
      -1,
      (event) => {
        return {
          ...decodeContractCreatedEvent(event),
          contractAddress: this.address,
        };
      },
      fromCount
    );
  }

  subscribeContractDestroyedEvent(
    options: SubscribeOptions<ContractDestroyedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeEventsFromContract(
      options,
      this.address,
      -2,
      (event) => {
        return {
          ...decodeContractDestroyedEvent(event),
          contractAddress: this.address,
        };
      },
      fromCount
    );
  }

  subscribeEvents(
    options: SubscribeOptions<ContractCreatedEvent | ContractDestroyedEvent>,
    fromCount?: number
  ): EventSubscription {
    const messageCallback = (event: node.ContractEvent): Promise<void> => {
      switch (event.eventIndex) {
        case -1: {
          return options.messageCallback({
            ...decodeContractCreatedEvent(event),
            contractAddress: this.address,
          });
        }

        case -2: {
          return options.messageCallback({
            ...decodeContractDestroyedEvent(event),
            contractAddress: this.address,
          });
        }

        default:
          throw new Error("Invalid event index: " + event.eventIndex);
      }
    };
    const errorCallback = (
      err: any,
      subscription: Subscription<node.ContractEvent>
    ): Promise<void> => {
      return options.errorCallback(
        err,
        subscription as unknown as Subscription<
          ContractCreatedEvent | ContractDestroyedEvent
        >
      );
    };
    const opt: SubscribeOptions<node.ContractEvent> = {
      pollingInterval: options.pollingInterval,
      messageCallback: messageCallback,
      errorCallback: errorCallback,
    };
    return subscribeToEvents(opt, this.address, fromCount);
  }

  async callGetSymbolMethod(
    params?: Omit<CallContractParams<{}>, "args">
  ): Promise<Omit<CallContractResult, "returns"> & { returns: HexString }> {
    const txId = params?.txId ?? randomTxId();
    const callParams = TokenTest.contract.toApiCallContract(
      { ...params, txId: txId, args: {} },
      this.groupIndex,
      this.address,
      0
    );
    const result = await web3
      .getCurrentNodeProvider()
      .contracts.postContractsCallContract(callParams);
    const callResult = TokenTest.contract.fromApiCallContractResult(
      result,
      txId,
      0
    );
    return {
      ...callResult,
      returns: callResult.returns[0] as HexString,
    };
  }

  async callGetNameMethod(
    params?: Omit<CallContractParams<{}>, "args">
  ): Promise<Omit<CallContractResult, "returns"> & { returns: HexString }> {
    const txId = params?.txId ?? randomTxId();
    const callParams = TokenTest.contract.toApiCallContract(
      { ...params, txId: txId, args: {} },
      this.groupIndex,
      this.address,
      1
    );
    const result = await web3
      .getCurrentNodeProvider()
      .contracts.postContractsCallContract(callParams);
    const callResult = TokenTest.contract.fromApiCallContractResult(
      result,
      txId,
      1
    );
    return {
      ...callResult,
      returns: callResult.returns[0] as HexString,
    };
  }

  async callGetDecimalsMethod(
    params?: Omit<CallContractParams<{}>, "args">
  ): Promise<Omit<CallContractResult, "returns"> & { returns: bigint }> {
    const txId = params?.txId ?? randomTxId();
    const callParams = TokenTest.contract.toApiCallContract(
      { ...params, txId: txId, args: {} },
      this.groupIndex,
      this.address,
      2
    );
    const result = await web3
      .getCurrentNodeProvider()
      .contracts.postContractsCallContract(callParams);
    const callResult = TokenTest.contract.fromApiCallContractResult(
      result,
      txId,
      2
    );
    return {
      ...callResult,
      returns: callResult.returns[0] as bigint,
    };
  }

  async callGetTotalSupplyMethod(
    params?: Omit<CallContractParams<{}>, "args">
  ): Promise<Omit<CallContractResult, "returns"> & { returns: bigint }> {
    const txId = params?.txId ?? randomTxId();
    const callParams = TokenTest.contract.toApiCallContract(
      { ...params, txId: txId, args: {} },
      this.groupIndex,
      this.address,
      3
    );
    const result = await web3
      .getCurrentNodeProvider()
      .contracts.postContractsCallContract(callParams);
    const callResult = TokenTest.contract.fromApiCallContractResult(
      result,
      txId,
      3
    );
    return {
      ...callResult,
      returns: callResult.returns[0] as bigint,
    };
  }
}
