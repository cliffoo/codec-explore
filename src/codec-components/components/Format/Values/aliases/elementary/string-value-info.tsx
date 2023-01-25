import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isStringValueInfoValid } from "@/utils/type-guards/other/string-value-info-valid";
import { StringValueInfoValid } from "@/components/Format/Values/interfaces/elementary/string-value-info-valid";
import { StringValueInfoMalformed } from "@/components/Format/Values/interfaces/elementary/string-value-info-malformed";

export const StringValueInfo = createPolymorphicComponent(
  (data: Format.Values.StringValueInfo) =>
    isStringValueInfoValid(data) ? (
      <StringValueInfoValid data={data} />
    ) : (
      <StringValueInfoMalformed data={data} />
    )
);
