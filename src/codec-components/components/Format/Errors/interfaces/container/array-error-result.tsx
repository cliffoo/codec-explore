import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isArrayError } from "@/utils/type-guards/decoder-error/array-error";
import { ArrayError } from "@/components/Format/Errors/aliases/container/array-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

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
