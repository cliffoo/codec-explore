import type { Format } from "@truffle/codec";

export default {
  fixed128x18: {
    kind: "value",
    type: { bits: 128, places: 18, typeClass: "fixed" },
    value: { asBig: 10 },
    interpretations: {}
  }
} satisfies Record<string, Format.Values.FixedValue>;
