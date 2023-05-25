import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Result } from "@/react/components/codec/Format.Values/types/general/result";

export const { MagicValue } = createCodecComponent(
  "MagicValue",
  ({ value }: Format.Values.MagicValue) => (
    // TODO
    <>
      {Object.values(value).map((result, index) => (
        <Result data={result} key={index} />
      ))}
    </>
  )
);
