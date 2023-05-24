import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { StringValueInfo } from "@/react/components/codec/Codec.Format.Values/types/elementary/string-value-info";

const displayName = "StringValue";

export const { StringValue } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value }: Format.Values.StringValue) => <StringValueInfo data={value} />
  )
};
