import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { StringValueInfo } from "@/components/Format/Values/aliases/elementary/string-value-info";

export const StringValue = createPolymorphicComponent(
  ({ value }: Format.Values.StringValue) => <StringValueInfo data={value} />
);
