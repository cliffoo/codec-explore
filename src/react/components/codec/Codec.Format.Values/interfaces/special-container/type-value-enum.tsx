import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { EnumValue } from "@/react/components/codec/Codec.Format.Values/interfaces/user-defined-elementary/enum-value";

const displayName = "TypeValueEnum";

export const { TypeValueEnum } = {
  [displayName]: createCodecComponent(
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
