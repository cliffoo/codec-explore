import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "BytesLocation";

export const { BytesLocation } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.BytesLocation) => <span>{data}</span>
  )
};
