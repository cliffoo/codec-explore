import type { Format } from "@truffle/codec";

export default {
  true: {
    kind: "value",
    type: { typeClass: "bool", typeHint: "bool" },
    interpretations: {},
    value: { asBoolean: true }
  },
  false: {
    kind: "value",
    type: { typeClass: "bool", typeHint: "bool" },
    interpretations: {},
    value: { asBoolean: false }
  }
} satisfies Record<string, Format.Values.BoolValue>;
