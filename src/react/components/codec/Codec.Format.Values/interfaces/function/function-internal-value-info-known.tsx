import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "FunctionInternalValueInfoKnown";

export const { FunctionInternalValueInfoKnown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionInternalValueInfoKnown) => (
      <span>{data.name}</span>
    )
  )
};
