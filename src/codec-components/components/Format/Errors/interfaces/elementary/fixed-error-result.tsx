import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isFixedError } from "@/utils/type-guards/decoder-error/fixed-error";
import { FixedError } from "@/components/Format/Errors/aliases/elementary/fixed-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const FixedErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.FixedErrorResult) =>
    isFixedError(error) ? (
      <FixedError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
