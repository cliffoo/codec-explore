import type { Format } from "@truffle/codec";

export default {
  someString: { asString: "some string", kind: "valid" }
} satisfies Record<string, Format.Values.StringValueInfoValid>;
