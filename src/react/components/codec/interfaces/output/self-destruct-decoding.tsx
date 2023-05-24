import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Code } from "@/react/components/common/code";

const displayName = "SelfDestructDecoding";

export const { SelfDestructDecoding } = {
  [displayName]: createCodecComponent<Codec.SelfDestructDecoding>(
    displayName,
    () => (
      <Code type="function">
        selfdestruct<Code type="bracket">()</Code>
      </Code>
    )
  )
};
