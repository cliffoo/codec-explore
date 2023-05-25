import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isUfixedValue } from "@/utils/type-guards/value-and-result/ufixed";
import { UfixedValue } from "@/react/components/codec/Format.Values/interfaces/elementary/ufixed-value";
import { UfixedErrorResult } from "@/react/components/codec/Format.Errors/interfaces/elementary/ufixed-error-result";

export const { UfixedResult } = createCodecComponent(
  "UfixedResult",
  (data: Format.Values.UfixedResult) =>
    isUfixedValue(data) ? (
      <UfixedValue data={data} />
    ) : (
      <UfixedErrorResult data={data} />
    )
);
