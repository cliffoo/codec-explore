import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isBoolError } from "@/utils/type-guards/decoder-error/bool-error";
import { BoolError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/bool-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "BoolErrorResult";

export const { BoolErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.BoolErrorResult) =>
      isBoolError(error) ? (
        <BoolError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
