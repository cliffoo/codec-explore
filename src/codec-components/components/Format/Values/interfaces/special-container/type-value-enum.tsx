import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { EnumValue } from "@/components/Format/Values/interfaces/user-defined-elementary/enum-value";

const displayName = "TypeValueEnum";

export const { TypeValueEnum } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.TypeValueEnum) => (
      // TODO
      <>
        {value.map((enumValue, index) => (
          <EnumValue data={enumValue} key={index} />
        ))}
      </>
    )
  )
};
