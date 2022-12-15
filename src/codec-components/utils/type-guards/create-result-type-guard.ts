import type { Format } from "@truffle/codec";

export function createResultTypeGuard<T extends Format.Values.Result>(
  exprs: Array<(data: Format.Values.Result) => boolean>
) {
  return function (data: Format.Values.Result): data is T {
    for (const expr of exprs) {
      if (expr(data)) return true;
    }
    return false;
  };
}
