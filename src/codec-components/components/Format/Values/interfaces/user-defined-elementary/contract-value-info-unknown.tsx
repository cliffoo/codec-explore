import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const ContractValueInfoUnknown = createPolymorphicComponent(
  // TODO
  (data: Format.Values.ContractValueInfoUnknown) => data.address
);
