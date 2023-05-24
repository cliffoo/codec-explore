import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "ReadErrorBytes";

export const { ReadErrorBytes } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.ReadErrorBytes) => (
      // TODO
      <span>
        {data.location}: {data.start} to {data.start + data.length}
      </span>
    )
  )
};
