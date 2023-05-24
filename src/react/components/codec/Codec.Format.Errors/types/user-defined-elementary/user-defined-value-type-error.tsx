import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { WrappedError } from "@/react/components/codec/Codec.Format.Errors/interfaces/user-defined-elementary/wrapped-error";

const displayName = "UserDefinedValueTypeError";

export const { UserDefinedValueTypeError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.UserDefinedValueTypeError) => (
      <WrappedError data={data} />
    )
  )
};
