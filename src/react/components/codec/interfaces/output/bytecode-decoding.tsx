import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Code } from "@/react/components/common/code";

export const { BytecodeDecoding } = createCodecComponent(
  "BytecodeDecoding",
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
);
