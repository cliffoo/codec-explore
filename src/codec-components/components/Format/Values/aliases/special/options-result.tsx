import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isOptionsValue } from "@/utils/type-guards/value-and-result/options";
import { OptionsValue } from "@/components/Format/Values/interfaces/special/options-value";
import { OptionsErrorResult } from "@/components/Format/Errors/interfaces/other/options-error-result";

const displayName = "OptionsResult";

export const { OptionsResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.OptionsResult) =>
      isOptionsValue(data) ? (
        <OptionsValue data={data} />
      ) : (
        <OptionsErrorResult data={data} />
      )
  )
};
