import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/react/components/codec/Codec.Format.Errors/types/generic/dynamic-data-implementation-error";

const displayName = "StringError";

export const { StringError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.StringError) => (
      <DynamicDataImplementationError data={data} />
    )
  )
};
