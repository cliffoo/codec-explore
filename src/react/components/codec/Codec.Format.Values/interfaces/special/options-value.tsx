import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Options } from "@/react/components/codec/interfaces/interfaces/options";

const displayName = "OptionsValue";

export const { OptionsValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.OptionsValue) => <Options data={value} />
  )
};
