import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isOptionsError } from "@/utils/type-guards/decoder-error/options-error";
import { OptionsError } from "@/react/components/codec/Codec.Format.Errors/types/other/options-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "OptionsErrorResult";

export const { OptionsErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.OptionsErrorResult) =>
      isOptionsError(error) ? (
        <OptionsError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
