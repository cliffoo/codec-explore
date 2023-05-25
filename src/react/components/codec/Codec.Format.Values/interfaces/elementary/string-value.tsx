import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { StringValueInfo } from "@/react/components/codec/Codec.Format.Values/types/elementary/string-value-info";

export const { StringValue } = createCodecComponent(
  "StringValue",
  ({ value }: Format.Values.StringValue) => <StringValueInfo data={value} />
);
