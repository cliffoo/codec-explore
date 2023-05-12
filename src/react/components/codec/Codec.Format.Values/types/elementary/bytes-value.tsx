import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isBytesStaticValue } from "@/utils/type-guards/value-and-result/bytes-static";
import { BytesStaticValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/bytes-static-value";
import { BytesDynamicValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/bytes-dynamic-value";

const displayName = "BytesValue";

export const { BytesValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.BytesValue) =>
      isBytesStaticValue(data) ? (
        <BytesStaticValue data={data} />
      ) : (
        <BytesDynamicValue data={data} />
      )
  )
};
