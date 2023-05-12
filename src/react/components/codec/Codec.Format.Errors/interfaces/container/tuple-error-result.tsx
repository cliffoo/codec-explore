import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isTupleError } from "@/utils/type-guards/decoder-error/tuple-error";
import { TupleError } from "@/react/components/codec/Codec.Format.Errors/types/container/tuple-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "TupleErrorResult";

export const { TupleErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.TupleErrorResult) =>
      isTupleError(error) ? (
        <TupleError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
