import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { EnumValue } from "@/react/components/codec/Codec.Format.Values/interfaces/user-defined-elementary/enum-value";

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
