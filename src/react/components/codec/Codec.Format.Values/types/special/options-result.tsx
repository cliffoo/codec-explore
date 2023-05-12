import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isOptionsValue } from "@/utils/type-guards/value-and-result/options";
import { OptionsValue } from "@/react/components/codec/Codec.Format.Values/interfaces/special/options-value";
import { OptionsErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/other/options-error-result";

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
