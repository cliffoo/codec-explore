import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "BytesPaddingError";

export const { BytesPaddingError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.BytesPaddingError) => <span>{data.raw}</span>
  )
};
