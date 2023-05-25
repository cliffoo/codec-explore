import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { IndexedReferenceTypeError } = createCodecComponent(
  "IndexedReferenceTypeError",
  // TODO
  (data: Format.Errors.IndexedReferenceTypeError) => <span>{data.raw}</span>
);
