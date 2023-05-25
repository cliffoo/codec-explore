import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { BuiltInValueErrorResult } from "@/react/components/codec/Codec.Format.Errors/types/elementary/built-in-value-error-result";

export const { WrappedError } = createCodecComponent(
  "WrappedError",
  ({ error }: Format.Errors.WrappedError) => (
    <BuiltInValueErrorResult data={error} />
  )
);
