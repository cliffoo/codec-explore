import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isArrayError } from "@/utils/type-guards/decoder-error/array-error";
import { ArrayError } from "@/components/Format/Errors/aliases/container/array-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const ArrayErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.ArrayErrorResult) =>
    isArrayError(error) ? (
      <ArrayError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
