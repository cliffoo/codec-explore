import React from "react";
import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createCodecComponent } from "../../utils/create-codec-component";
import { useInjectedNode } from "../../contexts/injected-node";
import { Code } from "../common/code";

export const { AddressValue } = createCodecComponent(
  "AddressValue",
  ({ value, type }: Format.Values.AddressValue) => {
    const { prefix, content } = useInjectedNode();
    return (
      <Code type="address" title={`type: ${typeStringWithoutLocation(type)}`}>
        {prefix?.prefix}
        {value.asAddress}
        {content?.suffix}
      </Code>
    );
  }
);
