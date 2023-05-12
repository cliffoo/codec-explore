import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { UfixedPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/ufixed-padding-error";

const displayName = "UfixedError";

export const { UfixedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.UfixedError) => <UfixedPaddingError data={data} />
  )
};
