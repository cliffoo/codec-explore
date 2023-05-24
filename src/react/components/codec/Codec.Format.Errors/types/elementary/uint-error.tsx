import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { UintPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/uint-padding-error";

const displayName = "UintError";

export const { UintError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.UintError) => <UintPaddingError data={data} />
  )
};
