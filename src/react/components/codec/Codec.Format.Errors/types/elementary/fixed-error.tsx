import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { FixedPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/fixed-padding-error";

const displayName = "FixedError";

export const { FixedError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.FixedError) => <FixedPaddingError data={data} />
  )
};
