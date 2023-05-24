import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { NameValuePair } from "@/react/components/codec/Codec.Format.Values/interfaces/other/name-value-pair";

const displayName = "StructValue";

export const { StructValue } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value }: Format.Values.StructValue) => (
      // TODO
      <>
        {value.map((nameValuePair, index) => (
          <NameValuePair data={nameValuePair} key={index} />
        ))}
      </>
    )
  )
};
