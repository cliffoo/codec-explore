import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isBytesStaticValue } from "@/utils/type-guards/value-and-result/bytes-static";
import { BytesStaticValue } from "@/components/Format/Values/interfaces/elementary/bytes-static-value";
import { BytesDynamicValue } from "@/components/Format/Values/interfaces/elementary/bytes-dynamic-value";

export const BytesValue = createPolymorphicComponent(
  (data: Format.Values.BytesValue) =>
    isBytesStaticValue(data) ? (
      <BytesStaticValue data={data} />
    ) : (
      <BytesDynamicValue data={data} />
    )
);
