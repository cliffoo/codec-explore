import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isTupleError } from "@/utils/type-guards/decoder-error/tuple-error";
import { TupleError } from "@/components/Format/Errors/aliases/container/tuple-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

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
