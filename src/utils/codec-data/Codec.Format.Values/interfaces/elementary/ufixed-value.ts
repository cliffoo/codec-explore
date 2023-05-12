import type { Format } from "@truffle/codec";

export default {
  ufixed128x18: {
    kind: "value",
    type: { bits: 128, places: 18, typeClass: "ufixed" },
    interpretations: {},
    value: { asBig: 10000 }
  }
} satisfies Record<string, Format.Values.UfixedValue>;
