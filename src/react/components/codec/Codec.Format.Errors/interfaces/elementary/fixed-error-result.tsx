import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isFixedError } from "@/utils/type-guards/decoder-error/fixed-error";
import { FixedError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/fixed-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "FixedErrorResult";

export const { FixedErrorResult } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ error }: Format.Errors.FixedErrorResult) =>
      isFixedError(error) ? (
        <FixedError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
