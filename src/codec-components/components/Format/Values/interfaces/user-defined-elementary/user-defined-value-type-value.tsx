import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { BuiltInValueValue } from "@/components/Format/Values/aliases/other/built-in-value-value";

export const UserDefinedValueTypeValue = createPolymorphicComponent(
  ({ value }: Format.Values.UserDefinedValueTypeValue) => (
    <BuiltInValueValue data={value} />
  )
);
