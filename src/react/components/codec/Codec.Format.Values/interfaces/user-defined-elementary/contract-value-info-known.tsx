import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "ContractValueInfoKnown";

export const { ContractValueInfoKnown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.ContractValueInfoKnown) => <span>{data.address}</span>
  )
};
