import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { CodeNotSuppliedError } = createCodecComponent(
  "CodeNotSuppliedError",
  // TODO
  (data: Format.Errors.CodeNotSuppliedError) => <span>{data.address}</span>
);
