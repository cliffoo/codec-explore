import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isStringValue } from "@/utils/type-guards/value-and-result/string";
import { StringValue } from "@/components/Format/Values/interfaces/elementary/string-value";
import { StringErrorResult } from "@/components/Format/Errors/interfaces/elementary/string-error-result";

const displayName = "StringResult";

export const { StringResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.StringResult) =>
      isStringValue(data) ? (
        <StringValue data={data} />
      ) : (
        <StringErrorResult data={data} />
      )
  )
};
