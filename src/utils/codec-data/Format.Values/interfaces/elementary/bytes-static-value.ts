import type { Format } from "@truffle/codec";

export default {
  bytes8: {
    kind: "value",
    type: { kind: "static", length: 8, typeClass: "bytes" },
    interpretations: {},
    value: { asHex: "0x0123456789abcdef" }
  }
} satisfies Record<string, Format.Values.BytesStaticValue>;
