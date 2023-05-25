import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { BytesLocation } = createCodecComponent(
  "BytesLocation",
  // TODO
  (data: Format.Errors.BytesLocation) => <span>{data}</span>
);
