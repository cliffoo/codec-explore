import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { FixedPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/fixed-padding-error";

export const { FixedError } = createCodecComponent(
  "FixedError",
  (data: Format.Errors.FixedError) => <FixedPaddingError data={data} />
);
