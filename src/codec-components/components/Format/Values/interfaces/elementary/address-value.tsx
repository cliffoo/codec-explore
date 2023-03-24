import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "AddressValue";

export const { AddressValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.AddressValue) => (
      // TODO: Payable?
      <CodeTooltip
        data={value.asAddress}
        dataOnHover={`type: ${type.typeClass}`}
      />
    )
  )
};
