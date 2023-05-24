import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { IntPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/int-padding-error";

const displayName = "IntError";

export const { IntError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.IntError) => <IntPaddingError data={data} />
  )
};
