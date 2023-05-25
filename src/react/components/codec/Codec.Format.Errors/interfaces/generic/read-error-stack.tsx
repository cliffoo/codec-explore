import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { ReadErrorStack } = createCodecComponent(
  "ReadErrorStack",
  (data: Format.Errors.ReadErrorStack) => (
    // TODO
    <span>
      {data.from} to {data.to}
    </span>
  )
);
