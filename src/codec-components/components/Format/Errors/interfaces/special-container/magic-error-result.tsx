import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isMagicError } from "@/utils/type-guards/decoder-error/magic-error";
import { MagicError } from "@/components/Format/Errors/aliases/special-container/magic-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

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
