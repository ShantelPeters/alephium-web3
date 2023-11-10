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
import { Parser } from 'binary-parser'
import { compactUnsignedIntCodec, DecodedCompactInt } from './compact-int-codec'
import { Codec } from './codec'

export interface DecodedArray<T> {
  length: DecodedCompactInt
  value: T[]
}

export class ArrayCodec<T> implements Codec<T[]> {
  parser = Parser.start()

  constructor(private childCodec: Codec<T>) {
    this.parser = ArrayCodec.arrayParser(childCodec.parser)
  }

  encode(input: T[]): Buffer {
    const result = [...compactUnsignedIntCodec.encodeU256(BigInt(input.length))]
    for (const element of input) {
      result.push(...Array.from(this.childCodec.encode(element)))
    }
    return Buffer.from(result)
  }

  decode(input: Buffer): T[] {
    const result = this.parser.parse(input)
    return result.value.map((v) => this.childCodec.decode(v.value))
  }

  static arrayParser(parser: Parser) {
    return new Parser()
      .nest('length', {
        type: compactUnsignedIntCodec.parser
      })
      .array('value', {
        length: function (ctx) {
          return compactUnsignedIntCodec.toU32(this['length']! as any as DecodedCompactInt)
        },
        type: parser
      })
  }
}
