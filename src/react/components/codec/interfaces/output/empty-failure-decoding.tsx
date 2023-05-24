import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Code } from "@/react/components/common/code";

const displayName = "EmptyFailureDecoding";

export const { EmptyFailureDecoding } = {
  [displayName]: createCodecComponent<Codec.EmptyFailureDecoding>(
    displayName,
    () => (
      <Code type="revert-keyword">
        revert<Code type="bracket">()</Code>
      </Code>
    )
  )
};
