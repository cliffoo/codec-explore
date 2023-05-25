import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { UintPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/uint-padding-error";

export const { UintError } = createCodecComponent(
  "UintError",
  (data: Format.Errors.UintError) => <UintPaddingError data={data} />
);
