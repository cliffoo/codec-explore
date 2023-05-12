import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isTypeErrorUnion } from "@/utils/type-guards/decoder-error/type-error-union";
import { TypeErrorUnion } from "@/react/components/codec/Codec.Format.Errors/types/special-container/type-error-union";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "TypeErrorResult";

export const { TypeErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.TypeErrorResult) =>
      isTypeErrorUnion(error) ? (
        <TypeErrorUnion data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
