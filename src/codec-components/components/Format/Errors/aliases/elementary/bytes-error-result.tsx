import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isBytesStaticErrorResult } from "@/utils/type-guards/value-and-result/bytes-static";
import { BytesStaticErrorResult } from "@/components/Format/Errors/interfaces/elementary/bytes-static-error-result";
import { BytesDynamicErrorResult } from "@/components/Format/Errors/interfaces/elementary/bytes-dynamic-error-result";

export const BytesErrorResult = createPolymorphicComponent(
  (data: Format.Errors.BytesErrorResult) =>
    isBytesStaticErrorResult(data) ? (
      <BytesStaticErrorResult data={data} />
    ) : (
      <BytesDynamicErrorResult data={data} />
    )
);
