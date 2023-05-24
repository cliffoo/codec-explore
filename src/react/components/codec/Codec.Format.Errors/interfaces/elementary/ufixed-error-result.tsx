import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isUfixedError } from "@/utils/type-guards/decoder-error/ufixed-error";
import { UfixedError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/ufixed-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "UfixedErrorResult";

export const { UfixedErrorResult } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ error }: Format.Errors.UfixedErrorResult) =>
      isUfixedError(error) ? (
        <UfixedError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
