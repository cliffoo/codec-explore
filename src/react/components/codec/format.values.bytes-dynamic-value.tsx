import React from "react";
import type { Format } from "@truffle/codec";
import { typeString } from "@truffle/codec/dist/lib/format/types";
import { createCodecComponent } from "../../utils/create-codec-component";
import { useInjectedNode } from "../../contexts/injected-node";
import { Code } from "../common/code";

export const { BytesDynamicValue } = createCodecComponent(
  "BytesDynamicValue",
  ({ value, type }: Format.Values.BytesDynamicValue) => {
    const { prefix, content } = useInjectedNode();
    return (
      <Code type="bytes" title={`type: ${typeString(type)}`}>
        {prefix?.prefix}
        {value.asHex}
        {content?.suffix}
      </Code>
    );
  }
);
