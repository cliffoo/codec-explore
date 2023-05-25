import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { BytesPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/bytes-padding-error";

export const { BytesStaticError } = createCodecComponent(
  "BytesStaticError",
  (data: Format.Errors.BytesStaticError) => <BytesPaddingError data={data} />
);
