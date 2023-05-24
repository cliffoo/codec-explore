import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "OverlongArraysAndStringsNotImplementedError";

export const { OverlongArraysAndStringsNotImplementedError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.OverlongArraysAndStringsNotImplementedError) => (
      // TODO
      <span>{data.lengthAsBN.toString()}</span>
    )
  )
};
