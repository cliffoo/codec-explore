import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { StringValueInfo } from "@/components/Format/Values/aliases/elementary/string-value-info";

const displayName = "StringValue";

export const { StringValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.StringValue) => <StringValueInfo data={value} />
  )
};
