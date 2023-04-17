import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "ContractValueInfoUnknown";

export const { ContractValueInfoUnknown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.ContractValueInfoUnknown) => (
      <Code>{data.address}</Code>
    )
  )
};
