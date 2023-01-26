import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isMagicValue } from "@/utils/type-guards/value-and-result/magic";
import { MagicValue } from "@/components/Format/Values/interfaces/special-container/magic-value";
import { MagicErrorResult } from "@/components/Format/Errors/interfaces/special-container/magic-error-result";

const displayName = "MagicResult";

export const { MagicResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.MagicResult) =>
      isMagicValue(data) ? (
        <MagicValue data={data} />
      ) : (
        <MagicErrorResult data={data} />
      )
  )
};
