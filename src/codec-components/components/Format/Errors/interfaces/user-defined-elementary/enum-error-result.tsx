import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isEnumError } from "@/utils/type-guards/decoder-error/enum-error";
import { EnumError } from "@/components/Format/Errors/aliases/user-defined-elementary/enum-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const EnumErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.EnumErrorResult) =>
    isEnumError(error) ? (
      <EnumError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
