import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isOptionsError } from "@/utils/type-guards/decoder-error/options-error";
import { OptionsError } from "@/react/components/codec/Format.Errors/types/other/options-error";
import { GenericError } from "@/react/components/codec/Format.Errors/types/generic/generic-error";

export const { OptionsErrorResult } = createCodecComponent(
  "OptionsErrorResult",
  ({ error }: Format.Errors.OptionsErrorResult) =>
    isOptionsError(error) ? (
      <OptionsError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
