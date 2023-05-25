import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { AddressPaddingError } = createCodecComponent(
  "AddressPaddingError",
  // TODO
  (data: Format.Errors.AddressPaddingError) => <span>{data.raw}</span>
);
