import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isStructValue } from "@/utils/type-guards/value-and-result/struct";
import { StructValue } from "@/react/components/codec/Format.Values/interfaces/container/struct-value";
import { StructErrorResult } from "@/react/components/codec/Format.Errors/interfaces/container/struct-error-result";

export const { StructResult } = createCodecComponent(
  "StructResult",
  (data: Format.Values.StructResult) =>
    isStructValue(data) ? (
      <StructValue data={data} />
    ) : (
      <StructErrorResult data={data} />
    )
);
