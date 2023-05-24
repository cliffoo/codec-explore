import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Options } from "@/react/components/codec/interfaces/interfaces/options";

const displayName = "OptionsValue";

export const { OptionsValue } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value }: Format.Values.OptionsValue) => <Options data={value} />
  )
};
