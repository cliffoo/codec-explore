import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "BytesLocation";

export const { BytesLocation } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.BytesLocation) => <span>{data}</span>
  )
};
