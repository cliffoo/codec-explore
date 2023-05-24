import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isOptionsError } from "@/utils/type-guards/decoder-error/options-error";
import { OptionsError } from "@/react/components/codec/Codec.Format.Errors/types/other/options-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "OptionsErrorResult";

export const { OptionsErrorResult } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ error }: Format.Errors.OptionsErrorResult) =>
      isOptionsError(error) ? (
        <OptionsError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
