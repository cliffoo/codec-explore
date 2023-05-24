import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "IndexedReferenceTypeError";

export const { IndexedReferenceTypeError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.IndexedReferenceTypeError) => <span>{data.raw}</span>
  )
};
