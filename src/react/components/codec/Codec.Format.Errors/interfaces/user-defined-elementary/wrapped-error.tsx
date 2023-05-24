import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { BuiltInValueErrorResult } from "@/react/components/codec/Codec.Format.Errors/types/elementary/built-in-value-error-result";

const displayName = "WrappedError";

export const { WrappedError } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ error }: Format.Errors.WrappedError) => (
      <BuiltInValueErrorResult data={error} />
    )
  )
};
