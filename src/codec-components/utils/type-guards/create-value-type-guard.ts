import type { Format } from "@truffle/codec";

export function createValueTypeGuard<T extends Format.Values.Value>(
  expr: (data: Format.Values.Value) => boolean
) {
  return function (
    data: Format.Values.Value | Format.Values.Result
  ): data is T {
    return data.kind === "value" && expr(data);
  };
}
