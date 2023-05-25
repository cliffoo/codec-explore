import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Options } from "@/react/components/codec/interfaces/interfaces/options";

export const { OptionsValue } = createCodecComponent(
  "OptionsValue",
  ({ value }: Format.Values.OptionsValue) => <Options data={value} />
);
