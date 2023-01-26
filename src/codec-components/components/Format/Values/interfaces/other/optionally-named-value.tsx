import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Result } from "@/components/Format/Values/aliases/general/result";

const displayName = "OptionallyNamedValue";

export const { OptionallyNamedValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ name, value }: Format.Values.OptionallyNamedValue) => (
      // TODO
      <>
        {name || "<no-name>"}: <Result data={value} />
      </>
    )
  )
};
