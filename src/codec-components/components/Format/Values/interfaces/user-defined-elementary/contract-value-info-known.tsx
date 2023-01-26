import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "ContractValueInfoKnown";

export const { ContractValueInfoKnown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.ContractValueInfoKnown) => data.address
  )
};
