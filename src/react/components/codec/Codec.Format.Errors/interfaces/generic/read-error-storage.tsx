import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "ReadErrorStorage";

export const { ReadErrorStorage } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.ReadErrorStorage) => (
      <span>{data.range.from.index.toString()}</span>
    )
  )
};
