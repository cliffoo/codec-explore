import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isStructError } from "@/utils/type-guards/decoder-error/struct-error";
import { StructError } from "@/react/components/codec/Codec.Format.Errors/types/container/struct-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "StructErrorResult";

export const { StructErrorResult } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ error }: Format.Errors.StructErrorResult) =>
      isStructError(error) ? (
        <StructError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
