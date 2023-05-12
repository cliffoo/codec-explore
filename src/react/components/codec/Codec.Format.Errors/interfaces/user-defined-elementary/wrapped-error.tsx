import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { BuiltInValueErrorResult } from "@/react/components/codec/Codec.Format.Errors/types/elementary/built-in-value-error-result";

const displayName = "WrappedError";

export const { WrappedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.WrappedError) => (
      <BuiltInValueErrorResult data={error} />
    )
  )
};
