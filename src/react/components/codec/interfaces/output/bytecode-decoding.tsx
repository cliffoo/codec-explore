import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Code } from "@/react/components/common/code";

const displayName = "BytecodeDecoding";

export const { BytecodeDecoding } = {
  [displayName]: createPolymorphicComponent(
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
