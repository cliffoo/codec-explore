import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isUintError } from "@/utils/type-guards/decoder-error/uint-error";
import { UintError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/uint-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "UintErrorResult";

export const { UintErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.UintErrorResult) =>
      isUintError(error) ? (
        <UintError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
