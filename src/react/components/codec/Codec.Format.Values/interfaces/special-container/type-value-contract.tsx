import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { NameValuePair } from "@/react/components/codec/Codec.Format.Values/interfaces/other/name-value-pair";

const displayName = "TypeValueContract";

export const { TypeValueContract } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value }: Format.Values.TypeValueContract) => (
      // TODO
      <>
        {value.map((nameValuePair, index) => (
          <NameValuePair data={nameValuePair} key={index} />
        ))}
      </>
    )
  )
};
