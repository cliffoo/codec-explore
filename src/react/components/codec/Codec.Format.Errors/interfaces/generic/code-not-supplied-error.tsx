import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "CodeNotSuppliedError";

export const { CodeNotSuppliedError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.CodeNotSuppliedError) => <span>{data.address}</span>
  )
};
