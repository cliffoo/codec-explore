import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isBoolError } from "@/utils/type-guards/decoder-error/bool-error";
import { BoolError } from "@/react/components/codec/Format.Errors/types/elementary/bool-error";
import { GenericError } from "@/react/components/codec/Format.Errors/types/generic/generic-error";

export const { BoolErrorResult } = createCodecComponent(
  "BoolErrorResult",
  ({ error }: Format.Errors.BoolErrorResult) =>
    isBoolError(error) ? (
      <BoolError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
