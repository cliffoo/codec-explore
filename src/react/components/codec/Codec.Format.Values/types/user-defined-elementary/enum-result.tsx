import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isEnumValue } from "@/utils/type-guards/value-and-result/enum";
import { EnumValue } from "@/react/components/codec/Codec.Format.Values/interfaces/user-defined-elementary/enum-value";
import { EnumErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/user-defined-elementary/enum-error-result";

const displayName = "EnumResult";

export const { EnumResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.EnumResult) =>
      isEnumValue(data) ? (
        <EnumValue data={data} />
      ) : (
        <EnumErrorResult data={data} />
      )
  )
};