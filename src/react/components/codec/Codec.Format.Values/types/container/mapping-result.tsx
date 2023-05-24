import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isMappingValue } from "@/utils/type-guards/value-and-result/mapping";
import { MappingValue } from "@/react/components/codec/Codec.Format.Values/interfaces/container/mapping-value";
import { MappingErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/container/mapping-error-result";

const displayName = "MappingResult";

export const { MappingResult } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.MappingResult) =>
      isMappingValue(data) ? (
        <MappingValue data={data} />
      ) : (
        <MappingErrorResult data={data} />
      )
  )
};
