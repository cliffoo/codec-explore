import type { Format } from "@truffle/codec";

export const typeGuardExprs = {
  address: data => data.type.typeClass === "address",
  bool: data => data.type.typeClass === "bool",
  bytes: data => data.type.typeClass === "bytes",
  bytesDynamic: data =>
    data.type.typeClass === "bytes" && data.type.kind === "dynamic",
  bytesStatic: data =>
    data.type.typeClass === "bytes" && data.type.kind === "static",
  fixed: data => data.type.typeClass === "fixed",
  int: data => data.type.typeClass === "int",
  string: data => data.type.typeClass === "string",
  ufixed: data => data.type.typeClass === "ufixed",
  uint: data => data.type.typeClass === "uint",
  array: data => data.type.typeClass === "array",
  mapping: data => data.type.typeClass === "mapping",
  struct: data => data.type.typeClass === "struct",
  tuple: data => data.type.typeClass === "tuple",
  functionExternal: data =>
    data.type.typeClass === "function" && data.type.visibility === "external",
  functionInternal: data =>
    data.type.typeClass === "function" && data.type.visibility === "internal",
  contract: data => data.type.typeClass === "contract",
  enum: data => data.type.typeClass === "enum",
  userDefinedValueType: data => data.type.typeClass === "userDefinedValueType",
  magic: data => data.type.typeClass === "magic",
  type: data => data.type.typeClass === "type",
  typeContract: data =>
    data.type.typeClass === "type" && data.type.type.typeClass === "contract",
  typeEnum: data =>
    data.type.typeClass === "type" && data.type.type.typeClass === "enum",
  options: data => data.type.typeClass === "options"
} satisfies Record<
  string,
  (data: Format.Values.Value | Format.Errors.ErrorResult) => boolean
>;
