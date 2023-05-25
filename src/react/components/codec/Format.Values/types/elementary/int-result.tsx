import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isIntValue } from "@/utils/type-guards/value-and-result/int";
import { IntValue } from "@/react/components/codec/Format.Values/interfaces/elementary/int-value";
import { IntErrorResult } from "@/react/components/codec/Format.Errors/interfaces/elementary/int-error-result";

export const { IntResult } = createCodecComponent(
  "IntResult",
  (data: Format.Values.IntResult) =>
    isIntValue(data) ? <IntValue data={data} /> : <IntErrorResult data={data} />
);
