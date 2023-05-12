import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/react/components/codec/Codec.Format.Errors/types/generic/dynamic-data-implementation-error";

const displayName = "BytesDynamicError";

export const { BytesDynamicError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.BytesDynamicError) => (
      <DynamicDataImplementationError data={data} />
    )
  )
};
