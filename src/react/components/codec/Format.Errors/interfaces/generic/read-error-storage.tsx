import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { ReadErrorStorage } = createCodecComponent(
  "ReadErrorStorage",
  (data: Format.Errors.ReadErrorStorage) => (
    // TODO
    <span>{data.range.from.index.toString()}</span>
  )
);
