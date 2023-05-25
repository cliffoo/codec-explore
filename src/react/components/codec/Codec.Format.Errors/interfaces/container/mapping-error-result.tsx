import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isMappingError } from "@/utils/type-guards/decoder-error/mapping-error";
import { MappingError } from "@/react/components/codec/Codec.Format.Errors/types/container/mapping-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

export const { MappingErrorResult } = createCodecComponent(
  "MappingErrorResult",
  ({ error }: Format.Errors.MappingErrorResult) =>
    isMappingError(error) ? (
      <MappingError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
