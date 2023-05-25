import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Code } from "@/react/components/common/code";

export const { EmptyFailureDecoding } = createCodecComponent(
  "EmptyFailureDecoding",
  (_data: Codec.EmptyFailureDecoding) => (
    <Code type="revert-keyword">
      revert<Code type="bracket">()</Code>
    </Code>
  )
);
