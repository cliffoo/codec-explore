import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isArrayError } from "@/utils/type-guards/decoder-error/array-error";
import { ArrayError } from "@/react/components/codec/Codec.Format.Errors/types/container/array-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "ArrayErrorResult";

export const { ArrayErrorResult } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ error }: Format.Errors.ArrayErrorResult) =>
      isArrayError(error) ? (
        <ArrayError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
