import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isMagicError } from "@/utils/type-guards/decoder-error/magic-error";
import { MagicError } from "@/react/components/codec/Codec.Format.Errors/types/special-container/magic-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "MagicErrorResult";

export const { MagicErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.MagicErrorResult) =>
      isMagicError(error) ? (
        <MagicError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
