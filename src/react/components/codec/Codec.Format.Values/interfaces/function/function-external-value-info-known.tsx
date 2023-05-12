import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "FunctionExternalValueInfoKnown";

export const { FunctionExternalValueInfoKnown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionExternalValueInfoKnown) => (
      <span>{data.abi.name}</span>
    )
  )
};
