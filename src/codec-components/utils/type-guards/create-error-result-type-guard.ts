import type { Format } from "@truffle/codec";

export function createErrorResultTypeGuard<T extends Format.Errors.ErrorResult>(
  expr: (data: Format.Errors.ErrorResult) => boolean
) {
  return function (
    data: Format.Errors.ErrorResult | Format.Values.Value
  ): data is T {
    return data.kind === "error" && expr(data);
  };
}
