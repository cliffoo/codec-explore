import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "AddressValue";

export const { AddressValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.AddressValue) => (
      // TODO: Payable?
      <Code color="blue" title={`type: ${type.typeClass}`}>
        {value.asAddress}
      </Code>
    )
  )
};
