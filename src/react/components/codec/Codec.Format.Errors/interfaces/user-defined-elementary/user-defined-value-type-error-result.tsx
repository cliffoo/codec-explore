import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isUserDefinedValueTypeError } from "@/utils/type-guards/decoder-error/user-defined-value-type-error";
import { UserDefinedValueTypeError } from "@/react/components/codec/Codec.Format.Errors/types/user-defined-elementary/user-defined-value-type-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "UserDefinedValueTypeErrorResult";

export const { UserDefinedValueTypeErrorResult } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ error }: Format.Errors.UserDefinedValueTypeErrorResult) =>
      isUserDefinedValueTypeError(error) ? (
        <UserDefinedValueTypeError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
