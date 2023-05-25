import type { Format } from "@truffle/codec";

export default {
  fffff: { asHex: "0xfffff", kind: "malformed" }
} satisfies Record<string, Format.Values.StringValueInfoMalformed>;
