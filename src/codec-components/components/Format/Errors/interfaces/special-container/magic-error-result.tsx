import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isMagicError } from "@/utils/type-guards/decoder-error/magic-error";
import { MagicError } from "@/components/Format/Errors/aliases/special-container/magic-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const MagicErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.MagicErrorResult) =>
    isMagicError(error) ? (
      <MagicError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
