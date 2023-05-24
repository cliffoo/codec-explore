import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { BytesPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/bytes-padding-error";

const displayName = "BytesStaticError";

export const { BytesStaticError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.BytesStaticError) => <BytesPaddingError data={data} />
  )
};
