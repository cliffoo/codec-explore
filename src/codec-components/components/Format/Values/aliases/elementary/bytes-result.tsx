import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isBytesStaticResult } from "@/utils/type-guards/value-and-result/bytes-static";
import { BytesStaticResult } from "@/components/Format/Values/aliases/elementary/bytes-static-result";
import { BytesDynamicResult } from "@/components/Format/Values/aliases/elementary/bytes-dynamic-result";

const displayName = "BytesResult";

export const { BytesResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.BytesResult) =>
      isBytesStaticResult(data) ? (
        <BytesStaticResult data={data} />
      ) : (
        <BytesDynamicResult data={data} />
      )
  )
};
