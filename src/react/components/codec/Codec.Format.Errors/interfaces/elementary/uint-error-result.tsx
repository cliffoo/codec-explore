import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isUintError } from "@/utils/type-guards/decoder-error/uint-error";
import { UintError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/uint-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

export const { UintErrorResult } = createCodecComponent(
  "UintErrorResult",
  ({ error }: Format.Errors.UintErrorResult) =>
    isUintError(error) ? (
      <UintError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
