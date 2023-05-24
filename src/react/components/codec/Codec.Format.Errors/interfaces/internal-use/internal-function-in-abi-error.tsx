import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "InternalFunctionInABIError";

export const { InternalFunctionInABIError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.InternalFunctionInABIError) => <span>{data.kind}</span>
  )
};
