import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Result } from "@/react/components/codec/Codec.Format.Values/types/general/result";

const displayName = "MagicValue";

export const { MagicValue } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value }: Format.Values.MagicValue) => (
      // TODO
      <>
        {Object.values(value).map((result, index) => (
          <Result data={result} key={index} />
        ))}
      </>
    )
  )
};
