import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { OverlongArraysAndStringsNotImplementedError } =
  createCodecComponent(
    "OverlongArraysAndStringsNotImplementedError",
    (data: Format.Errors.OverlongArraysAndStringsNotImplementedError) => (
      // TODO
      <span>{data.lengthAsBN.toString()}</span>
    )
  );
