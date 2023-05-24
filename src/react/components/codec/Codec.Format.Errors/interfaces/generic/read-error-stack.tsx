import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "ReadErrorStack";

export const { ReadErrorStack } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.ReadErrorStack) => (
      <span>
        {data.from} to {data.to}
      </span>
    )
  )
};
