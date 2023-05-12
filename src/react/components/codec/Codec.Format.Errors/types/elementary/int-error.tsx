import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { IntPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/int-padding-error";

const displayName = "IntError";

export const { IntError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.IntError) => <IntPaddingError data={data} />
  )
};
