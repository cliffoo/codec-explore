import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Result } from "@/components/Format/Values/aliases/general/result";

export const OptionallyNamedValue = createPolymorphicComponent(
  ({ name, value }: Format.Values.OptionallyNamedValue) => (
    // TODO
    <>
      {name || "<no-name>"}: <Result data={value} />
    </>
  )
);
