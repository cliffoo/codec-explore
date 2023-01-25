import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { EnumValue } from "@/components/Format/Values/interfaces/user-defined-elementary/enum-value";

export const TypeValueEnum = createPolymorphicComponent(
  ({ value }: Format.Values.TypeValueEnum) => (
    // TODO
    <>
      {value.map((enumValue, index) => (
        <EnumValue data={enumValue} key={index} />
      ))}
    </>
  )
);
