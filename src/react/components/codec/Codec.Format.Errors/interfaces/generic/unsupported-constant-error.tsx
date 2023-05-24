import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "UnsupportedConstantError";

export const { UnsupportedConstantError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.UnsupportedConstantError) => (
      <span>{data.definition.name}</span>
    )
  )
};
