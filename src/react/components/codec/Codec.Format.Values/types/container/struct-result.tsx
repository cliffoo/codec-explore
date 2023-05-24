import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isStructValue } from "@/utils/type-guards/value-and-result/struct";
import { StructValue } from "@/react/components/codec/Codec.Format.Values/interfaces/container/struct-value";
import { StructErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/container/struct-error-result";

const displayName = "StructResult";

export const { StructResult } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.StructResult) =>
      isStructValue(data) ? (
        <StructValue data={data} />
      ) : (
        <StructErrorResult data={data} />
      )
  )
};
