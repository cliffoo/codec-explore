import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { BytesPaddingError } from "@/components/Format/Errors/interfaces/elementary/bytes-padding-error";

export const BytesStaticError = createPolymorphicComponent(
  (data: Format.Errors.BytesStaticError) => <BytesPaddingError data={data} />
);
