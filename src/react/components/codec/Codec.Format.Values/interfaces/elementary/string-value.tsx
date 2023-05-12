import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { StringValueInfo } from "@/react/components/codec/Codec.Format.Values/types/elementary/string-value-info";

const displayName = "StringValue";

export const { StringValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.StringValue) => <StringValueInfo data={value} />
  )
};
