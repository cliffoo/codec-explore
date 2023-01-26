import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { BuiltInValueValue } from "@/components/Format/Values/aliases/other/built-in-value-value";

const displayName = "UserDefinedValueTypeValue";

export const { UserDefinedValueTypeValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.UserDefinedValueTypeValue) => (
      <BuiltInValueValue data={value} />
    )
  )
};
