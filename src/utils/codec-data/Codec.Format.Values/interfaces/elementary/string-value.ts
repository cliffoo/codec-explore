import type { Format } from "@truffle/codec";

export default {
  malformed: {
    kind: "value",
    type: { typeClass: "string" },
    interpretations: {},
    value: { asHex: "0xaaaaaa", kind: "malformed" }
  },
  valid: {
    kind: "value",
    type: { typeClass: "string" },
    interpretations: {},
    value: { asString: "This is a valid string.", kind: "valid" }
  }
} satisfies Record<string, Format.Values.StringValue>;
