import type { Format } from "@truffle/codec";

export default {
  fixed128x18: {
    kind: "value",
    type: { bits: 128, places: 18, typeClass: "fixed" },
    interpretations: {},
    value: { asBig: 10 }
  }
} satisfies Record<string, Format.Values.FixedValue>;
