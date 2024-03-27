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
  Val,
} from "@alephium/web3";
import { default as MapTestContractJson } from "../test/MapTest.ral.json";
import { getContractByCodeHash } from "./contracts";

import { Balances, MapValue, TokenBalance, AllStructs } from "./types";
import { AllGeneratedContracts } from "./types";

// Custom types for the contract
export namespace MapTestTypes {
  export interface Fields extends Record<string, Val> {
    a: bigint;
    b: bigint;
  }

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
    "=6-1+d=3-1+3=3-2+8f=2-1=1+b=2-2+c4=13-1+7=40+7a037e0300012c00=226+7a037e0300012c00=308-2+4022=90+7a047e0300012c00=46+7a047e0300012c00=112",
    "d012c5bf0e7658ee640d58506c576e5fdbcc5c2c7515b1ad9dcf3076f85af881",
    AllStructs,
    AllGeneratedContracts
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