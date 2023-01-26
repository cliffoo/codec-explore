import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Options } from "@/components/options";

const displayName = "OptionsValue";

export const { OptionsValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.OptionsValue) => <Options data={value} />
  )
};
