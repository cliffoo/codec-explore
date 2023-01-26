import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { BytesPaddingError } from "@/components/Format/Errors/interfaces/elementary/bytes-padding-error";

const displayName = "BytesStaticError";

export const { BytesStaticError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.BytesStaticError) => <BytesPaddingError data={data} />
  )
};
