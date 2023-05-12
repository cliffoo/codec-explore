import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { BytesPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/bytes-padding-error";

const displayName = "BytesStaticError";

export const { BytesStaticError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.BytesStaticError) => <BytesPaddingError data={data} />
  )
};
