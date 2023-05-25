import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isMagicError } from "@/utils/type-guards/decoder-error/magic-error";
import { MagicError } from "@/react/components/codec/Format.Errors/types/special-container/magic-error";
import { GenericError } from "@/react/components/codec/Format.Errors/types/generic/generic-error";

export const { MagicErrorResult } = createCodecComponent(
  "MagicErrorResult",
  ({ error }: Format.Errors.MagicErrorResult) =>
    isMagicError(error) ? (
      <MagicError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
