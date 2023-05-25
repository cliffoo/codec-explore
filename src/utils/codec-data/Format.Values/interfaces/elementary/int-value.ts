import type { Format } from "@truffle/codec";
import { toBN } from "@truffle/codec/dist/lib/conversion";

export default {
  int256: {
    kind: "value",
    type: { bits: 256, typeClass: "int" },
    interpretations: {},
    value: { asBN: toBN(92458120) }
  }
} satisfies Record<string, Format.Values.IntValue>;
