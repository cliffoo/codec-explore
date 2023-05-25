import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { BuiltInValueValue } from "@/react/components/codec/Codec.Format.Values/types/other/built-in-value-value";

export const { UserDefinedValueTypeValue } = createCodecComponent(
  "UserDefinedValueTypeValue",
  ({ value }: Format.Values.UserDefinedValueTypeValue) => (
    <BuiltInValueValue data={value} />
  )
);
