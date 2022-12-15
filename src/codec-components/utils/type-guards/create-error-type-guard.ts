import type { Format } from "@truffle/codec";

export function createErrorTypeGuard<T extends Format.Errors.DecoderError>(
  kind: Format.Errors.DecoderError["kind"]
) {
  return function (data: Format.Errors.DecoderError): data is T {
    return data.kind === kind;
  };
}
