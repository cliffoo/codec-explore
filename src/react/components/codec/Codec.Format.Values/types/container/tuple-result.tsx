import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isTupleValue } from "@/utils/type-guards/value-and-result/tuple";
import { TupleValue } from "@/react/components/codec/Codec.Format.Values/interfaces/container/tuple-value";
import { TupleErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/container/tuple-error-result";

const displayName = "TupleResult";

export const { TupleResult } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.TupleResult) =>
      isTupleValue(data) ? (
        <TupleValue data={data} />
      ) : (
        <TupleErrorResult data={data} />
      )
  )
};
