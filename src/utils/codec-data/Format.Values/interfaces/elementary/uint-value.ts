import type { Format } from "@truffle/codec";
import { toBN } from "@truffle/codec/dist/lib/conversion";

export default {
  uint8: {
    kind: "value",
    type: { bits: 8, typeClass: "uint" },
    interpretations: {},
    value: { asBN: toBN("ff") }
  },
  uint256: {
    kind: "value",
    type: { bits: 256, typeClass: "uint", typeHint: "uint256" },
    interpretations: {},
    value: { asBN: toBN("ffffffff") }
  }
} satisfies Record<string, Format.Values.UintValue>;
