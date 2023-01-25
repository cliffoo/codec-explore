import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Options } from "@/components/options";

export const OptionsValue = createPolymorphicComponent(
  ({ value }: Format.Values.OptionsValue) => <Options data={value} />
);
