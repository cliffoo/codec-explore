import type { StateVariable } from "@truffle/codec";
import { toBN } from "@truffle/codec/dist/lib/conversion";

export default {
  string: {
    class: {
      contractKind: "contract",
      id: "1",
      kind: "native",
      payable: false,
      typeClass: "contract",
      typeName: "SomeCoin"
    },
    name: "symbol",
    value: {
      kind: "value",
      type: { typeClass: "string" },
      interpretations: {},
      value: { asString: "SOME", kind: "valid" }
    }
  },
  uint8: {
    class: {
      contractKind: "contract",
      id: "1",
      kind: "native",
      payable: false,
      typeClass: "contract",
      typeName: "SomeCoin"
    },
    name: "decimals",
    value: {
      kind: "value",
      type: { bits: 8, typeClass: "uint" },
      interpretations: {},
      value: { asBN: toBN("f2") }
    }
  }
} satisfies Record<string, StateVariable>;
