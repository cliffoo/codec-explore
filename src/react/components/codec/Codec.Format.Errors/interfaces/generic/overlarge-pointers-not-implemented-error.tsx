import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "OverlargePointersNotImplementedError";

export const { OverlargePointersNotImplementedError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.OverlargePointersNotImplementedError) => (
      // TODO
      <span>{data.pointerAsBN.toString()}</span>
    )
  )
};
