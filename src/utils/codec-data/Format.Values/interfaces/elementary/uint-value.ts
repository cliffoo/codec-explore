import type { Format } from "@truffle/codec";
import BN from "bn.js";

export default {
  uint8: {
    kind: "value",
    type: { bits: 8, typeClass: "uint" },
    interpretations: {},
    value: { asBN: new BN("ff", 16) }
  },
  uint256: {
    kind: "value",
    type: { bits: 256, typeClass: "uint", typeHint: "uint256" },
    interpretations: {},
    value: { asBN: new BN("ffffffff", 16) }
  }
} satisfies Record<string, Format.Values.UintValue>;
