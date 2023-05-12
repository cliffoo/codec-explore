import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { BuiltInValueValue } from "@/react/components/codec/Codec.Format.Values/types/other/built-in-value-value";

const displayName = "UserDefinedValueTypeValue";

export const { UserDefinedValueTypeValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.UserDefinedValueTypeValue) => (
      <BuiltInValueValue data={value} />
    )
  )
};
