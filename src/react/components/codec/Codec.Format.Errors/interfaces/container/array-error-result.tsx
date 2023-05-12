import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isArrayError } from "@/utils/type-guards/decoder-error/array-error";
import { ArrayError } from "@/react/components/codec/Codec.Format.Errors/types/container/array-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "ArrayErrorResult";

export const { ArrayErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.ArrayErrorResult) =>
      isArrayError(error) ? (
        <ArrayError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
