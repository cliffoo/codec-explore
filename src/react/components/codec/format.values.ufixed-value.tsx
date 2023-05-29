import React from "react";
import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createCodecComponent } from "../../utils/create-codec-component";
import { useInjectedNode } from "../../contexts/injected-node";
import { Code } from "../common/code";

export const { UfixedValue } = createCodecComponent(
  "UfixedValue",
  ({ value, type }: Format.Values.UfixedValue) => {
    const { prefix, content } = useInjectedNode();
    return (
      <Code type="number" title={`type: ${typeStringWithoutLocation(type)}`}>
        {prefix?.prefix}
        {value.asBig.toString()}
        {content?.suffix}
      </Code>
    );
  }
);
