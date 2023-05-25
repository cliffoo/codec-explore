import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { NameValuePair } from "@/react/components/codec/Format.Values/interfaces/other/name-value-pair";

export const { StructValue } = createCodecComponent(
  "StructValue",
  ({ value }: Format.Values.StructValue) => (
    // TODO
    <>
      {value.map((nameValuePair, index) => (
        <NameValuePair data={nameValuePair} key={index} />
      ))}
    </>
  )
);
