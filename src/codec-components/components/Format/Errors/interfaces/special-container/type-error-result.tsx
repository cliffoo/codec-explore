import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isTypeErrorUnion } from "@/utils/type-guards/decoder-error/type-error-union";
import { TypeErrorUnion } from "@/components/Format/Errors/aliases/special-container/type-error-union";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

const displayName = "TypeErrorResult";

export const { TypeErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.TypeErrorResult) =>
      isTypeErrorUnion(error) ? (
        <TypeErrorUnion data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
