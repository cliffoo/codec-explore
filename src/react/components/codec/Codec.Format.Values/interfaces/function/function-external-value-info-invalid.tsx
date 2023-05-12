import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "FunctionExternalValueInfoInvalid";

export const { FunctionExternalValueInfoInvalid } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionExternalValueInfoInvalid) => (
      <span>{data.selector}</span>
    )
  )
};
