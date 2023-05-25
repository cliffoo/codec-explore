import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isTypeValue } from "@/utils/type-guards/value-and-result/type";
import { TypeValue } from "@/react/components/codec/Codec.Format.Values/types/special-container/type-value";
import { TypeErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/special-container/type-error-result";

export const { TypeResult } = createCodecComponent(
  "TypeResult",
  (data: Format.Values.TypeResult) =>
    isTypeValue(data) ? (
      <TypeValue data={data} />
    ) : (
      <TypeErrorResult data={data} />
    )
);
