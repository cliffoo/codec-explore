import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isBoolError } from "@/utils/type-guards/decoder-error/bool-error";
import { BoolError } from "@/components/Format/Errors/aliases/elementary/bool-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const BoolErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.BoolErrorResult) =>
    isBoolError(error) ? (
      <BoolError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
