import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { BytesPaddingError } = createCodecComponent(
  "BytesPaddingError",
  // TODO
  (data: Format.Errors.BytesPaddingError) => <span>{data.raw}</span>
);
