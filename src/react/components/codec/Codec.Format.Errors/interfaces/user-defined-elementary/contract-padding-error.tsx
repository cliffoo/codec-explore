import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "ContractPaddingError";

export const { ContractPaddingError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.ContractPaddingError) => <span>{data.raw}</span>
  )
};
