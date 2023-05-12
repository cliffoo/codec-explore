import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "ContractValueInfoUnknown";

export const { ContractValueInfoUnknown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.ContractValueInfoUnknown) => (
      <span>{data.address}</span>
    )
  )
};
