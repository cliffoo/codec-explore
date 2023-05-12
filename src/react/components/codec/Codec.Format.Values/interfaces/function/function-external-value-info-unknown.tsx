import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "FunctionExternalValueInfoUnknown";

export const { FunctionExternalValueInfoUnknown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionExternalValueInfoUnknown) => (
      <span>{data.selector}</span>
    )
  )
};
