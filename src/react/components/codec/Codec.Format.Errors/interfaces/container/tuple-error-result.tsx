import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isTupleError } from "@/utils/type-guards/decoder-error/tuple-error";
import { TupleError } from "@/react/components/codec/Codec.Format.Errors/types/container/tuple-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "TupleErrorResult";

export const { TupleErrorResult } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ error }: Format.Errors.TupleErrorResult) =>
      isTupleError(error) ? (
        <TupleError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
