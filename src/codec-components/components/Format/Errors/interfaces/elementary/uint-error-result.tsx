import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUintError } from "@/utils/type-guards/decoder-error/uint-error";
import { UintError } from "@/components/Format/Errors/aliases/elementary/uint-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const UintErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.UintErrorResult) =>
    isUintError(error) ? (
      <UintError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
