import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { EnumValue } from "@/react/components/codec/Format.Values/interfaces/user-defined-elementary/enum-value";

export const { TypeValueEnum } = createCodecComponent(
  "TypeValueEnum",
  ({ value }: Format.Values.TypeValueEnum) => (
    // TODO
    <>
      {value.map((enumValue, index) => (
        <EnumValue data={enumValue} key={index} />
      ))}
    </>
  )
);
