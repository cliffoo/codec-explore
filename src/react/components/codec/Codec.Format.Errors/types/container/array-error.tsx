import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/react/components/codec/Codec.Format.Errors/types/generic/dynamic-data-implementation-error";

const displayName = "ArrayError";

export const { ArrayError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.ArrayError) => (
      <DynamicDataImplementationError data={data} />
    )
  )
};
