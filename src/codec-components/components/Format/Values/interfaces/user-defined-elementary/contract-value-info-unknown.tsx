import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "ContractValueInfoUnknown";

export const { ContractValueInfoUnknown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.ContractValueInfoUnknown) => data.address
  )
};
