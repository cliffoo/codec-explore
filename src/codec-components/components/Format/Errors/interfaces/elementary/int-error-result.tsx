import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isIntError } from "@/utils/type-guards/decoder-error/int-error";
import { IntError } from "@/components/Format/Errors/aliases/elementary/int-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const IntErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.IntErrorResult) =>
    isIntError(error) ? (
      <IntError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
