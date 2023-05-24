import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Code } from "@/react/components/common/code";

const displayName = "BytecodeDecoding";

export const { BytecodeDecoding } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Codec.BytecodeDecoding) => (
      <Code
        type="bytes"
        title={`${data.class.typeName} contract${
          data.address ? ` (${data.address})` : ""
        } bytecode`}
      >
        {data.bytecode}
      </Code>
    )
  )
};
