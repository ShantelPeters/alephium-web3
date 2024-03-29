/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as MapTestContractJson } from "../test/MapTest.ral.json";
import { getContractByCodeHash } from "./contracts";
import { Balances, MapValue, TokenBalance, AllStructs } from "./types";

// Custom types for the contract
export namespace MapTestTypes {
  export type Fields = {
    a: bigint;
    b: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    get: {
      params: CallContractParams<{ key: Address }>;
      result: CallContractResult<MapValue>;
    };
    contains: {
      params: CallContractParams<{ key: Address }>;
      result: CallContractResult<boolean>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<MapTestInstance, MapTestTypes.Fields> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as MapTestTypes.Fields;
  }

  at(address: string): MapTestInstance {
    return new MapTestInstance(address);
  }

  tests = {
    insert: async (
      params: TestContractParams<
        MapTestTypes.Fields & {
          map0?: Map<Address, MapValue>;
          map1?: Map<bigint, bigint>;
        },
        { key: Address; value: MapValue }
      >
    ): Promise<
      TestContractResult<
        null,
        { map0?: Map<Address, MapValue>; map1?: Map<bigint, bigint> }
      >
    > => {
      return testMethod(this, "insert", params);
    },
    update: async (
      params: TestContractParams<
        MapTestTypes.Fields & {
          map0?: Map<Address, MapValue>;
          map1?: Map<bigint, bigint>;
        },
        { key: Address }
      >
    ): Promise<
      TestContractResult<
        null,
        { map0?: Map<Address, MapValue>; map1?: Map<bigint, bigint> }
      >
    > => {
      return testMethod(this, "update", params);
    },
    remove: async (
      params: TestContractParams<
        MapTestTypes.Fields & {
          map0?: Map<Address, MapValue>;
          map1?: Map<bigint, bigint>;
        },
        { key: Address }
      >
    ): Promise<
      TestContractResult<
        null,
        { map0?: Map<Address, MapValue>; map1?: Map<bigint, bigint> }
      >
    > => {
      return testMethod(this, "remove", params);
    },
    get: async (
      params: TestContractParams<
        MapTestTypes.Fields & {
          map0?: Map<Address, MapValue>;
          map1?: Map<bigint, bigint>;
        },
        { key: Address }
      >
    ): Promise<
      TestContractResult<
        MapValue,
        { map0?: Map<Address, MapValue>; map1?: Map<bigint, bigint> }
      >
    > => {
      return testMethod(this, "get", params);
    },
    contains: async (
      params: TestContractParams<
        MapTestTypes.Fields & {
          map0?: Map<Address, MapValue>;
          map1?: Map<bigint, bigint>;
        },
        { key: Address }
      >
    ): Promise<
      TestContractResult<
        boolean,
        { map0?: Map<Address, MapValue>; map1?: Map<bigint, bigint> }
      >
    > => {
      return testMethod(this, "contains", params);
    },
  };
}

// Use this object to test and deploy the contract
export const MapTest = new Factory(
  Contract.fromJson(
    MapTestContractJson,
    "=6-1+4=3-1+a=2-2+11=3-1+3=3-1+5=12-1+b=40+7a037e0300012c00=56+7a037e0300012c00=217-1+a=114+7a047e0300012c00=46+7a047e0300012c00=136",
    "23c1ab39042b459d30f531ad31f52620ec5c1bd8a9142d2c3c2fd27d72ce1370",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class MapTestInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<MapTestTypes.State> {
    return fetchContractState(MapTest, this);
  }

  methods = {
    get: async (
      params: MapTestTypes.CallMethodParams<"get">
    ): Promise<MapTestTypes.CallMethodResult<"get">> => {
      return callMethod(MapTest, this, "get", params, getContractByCodeHash);
    },
    contains: async (
      params: MapTestTypes.CallMethodParams<"contains">
    ): Promise<MapTestTypes.CallMethodResult<"contains">> => {
      return callMethod(
        MapTest,
        this,
        "contains",
        params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends MapTestTypes.MultiCallParams>(
    calls: Calls
  ): Promise<MapTestTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      MapTest,
      this,
      calls,
      getContractByCodeHash
    )) as MapTestTypes.MultiCallResults<Calls>;
  }
}
