import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUfixedError } from "@/utils/type-guards/decoder-error/ufixed-error";
import { UfixedError } from "@/components/Format/Errors/aliases/elementary/ufixed-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const UfixedErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.UfixedErrorResult) =>
    isUfixedError(error) ? (
      <UfixedError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
