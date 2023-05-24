import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { BuiltInValueValue } from "@/react/components/codec/Codec.Format.Values/types/other/built-in-value-value";

const displayName = "UserDefinedValueTypeValue";

export const { UserDefinedValueTypeValue } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value }: Format.Values.UserDefinedValueTypeValue) => (
      <BuiltInValueValue data={value} />
    )
  )
};
