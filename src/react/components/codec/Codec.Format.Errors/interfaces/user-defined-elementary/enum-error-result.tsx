import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isEnumError } from "@/utils/type-guards/decoder-error/enum-error";
import { EnumError } from "@/react/components/codec/Codec.Format.Errors/types/user-defined-elementary/enum-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "EnumErrorResult";

export const { EnumErrorResult } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ error }: Format.Errors.EnumErrorResult) =>
      isEnumError(error) ? (
        <EnumError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
