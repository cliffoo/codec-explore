import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isOptionsError } from "@/utils/type-guards/decoder-error/options-error";
import { OptionsError } from "@/components/Format/Errors/aliases/other/options-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const OptionsErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.OptionsErrorResult) =>
    isOptionsError(error) ? (
      <OptionsError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
