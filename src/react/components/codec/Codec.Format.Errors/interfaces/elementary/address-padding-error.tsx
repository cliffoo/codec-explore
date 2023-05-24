import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "AddressPaddingError";

export const { AddressPaddingError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.AddressPaddingError) => <span>{data.raw}</span>
  )
};
