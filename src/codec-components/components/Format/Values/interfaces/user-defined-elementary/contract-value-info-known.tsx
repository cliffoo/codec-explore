import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const ContractValueInfoKnown = createPolymorphicComponent(
  // TODO
  (data: Format.Values.ContractValueInfoKnown) => data.address
);
