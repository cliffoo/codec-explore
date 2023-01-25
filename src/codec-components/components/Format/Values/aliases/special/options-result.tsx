import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isOptionsValue } from "@/utils/type-guards/value-and-result/options";
import { OptionsValue } from "@/components/Format/Values/interfaces/special/options-value";
import { OptionsErrorResult } from "@/components/Format/Errors/interfaces/other/options-error-result";

export const OptionsResult = createPolymorphicComponent(
  (data: Format.Values.OptionsResult) =>
    isOptionsValue(data) ? (
      <OptionsValue data={data} />
    ) : (
      <OptionsErrorResult data={data} />
    )
);
