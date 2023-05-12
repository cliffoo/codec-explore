import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isBytesStaticValue } from "@/utils/type-guards/value-and-result/bytes-static";
import { BytesStaticValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/bytes-static-value";
import { BytesStaticErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/bytes-static-error-result";

const displayName = "BytesStaticResult";

export const { BytesStaticResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.BytesStaticResult) =>
      isBytesStaticValue(data) ? (
        <BytesStaticValue data={data} />
      ) : (
        <BytesStaticErrorResult data={data} />
      )
  )
};
