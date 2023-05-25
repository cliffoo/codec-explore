import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isTypeErrorUnion } from "@/utils/type-guards/decoder-error/type-error-union";
import { TypeErrorUnion } from "@/react/components/codec/Codec.Format.Errors/types/special-container/type-error-union";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

export const { TypeErrorResult } = createCodecComponent(
  "TypeErrorResult",
  ({ error }: Format.Errors.TypeErrorResult) =>
    isTypeErrorUnion(error) ? (
      <TypeErrorUnion data={error} />
    ) : (
      <GenericError data={error} />
    )
);
