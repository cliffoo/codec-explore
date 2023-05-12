import type { Format } from "@truffle/codec";
import { toBN } from "@truffle/codec/dist/lib/conversion";

export default {
  int32ToAddress: {
    kind: "value",
    type: {
      keyType: { typeClass: "int", bits: 32 },
      typeClass: "mapping",
      valueType: { kind: "general", typeClass: "address" }
    },
    interpretations: {},
    value: [
      {
        key: {
          kind: "value",
          type: { bits: 32, typeClass: "int" },
          interpretations: {},
          value: { asBN: toBN("1000") }
        },
        value: {
          kind: "value",
          type: { kind: "general", typeClass: "address" },
          interpretations: {},
          value: { asAddress: `0x${"1".repeat(40)}` }
        }
      },
      {
        key: {
          kind: "value",
          type: { bits: 32, typeClass: "int" },
          interpretations: {},
          value: { asBN: toBN("2000") }
        },
        value: {
          kind: "value",
          type: { kind: "general", typeClass: "address" },
          interpretations: {},
          value: { asAddress: `0x${"2".repeat(40)}` }
        }
      },
      {
        key: {
          kind: "value",
          type: { bits: 32, typeClass: "int" },
          interpretations: {},
          value: { asBN: toBN("3000") }
        },
        value: {
          kind: "value",
          type: { kind: "general", typeClass: "address" },
          interpretations: {},
          value: { asAddress: `0x${"3".repeat(40)}` }
        }
      }
    ]
  },
  nested: {
    kind: "value",
    type: {
      keyType: { typeClass: "int", bits: 32 },
      typeClass: "mapping",
      valueType: {
        keyType: { typeClass: "uint", bits: 16 },
        typeClass: "mapping",
        valueType: { kind: "general", typeClass: "address" }
      }
    },
    interpretations: {},
    value: [
      {
        key: {
          kind: "value",
          type: { bits: 32, typeClass: "int" },
          interpretations: {},
          value: { asBN: toBN("100") }
        },
        value: {
          kind: "value",
          type: {
            keyType: { typeClass: "uint", bits: 16 },
            typeClass: "mapping",
            valueType: { kind: "general", typeClass: "address" }
          },
          interpretations: {},
          value: [
            {
              key: {
                kind: "value",
                type: { bits: 16, typeClass: "uint" },
                interpretations: {},
                value: { asBN: toBN("2000") }
              },
              value: {
                kind: "value",
                type: { kind: "general", typeClass: "address" },
                interpretations: {},
                value: {
                  asAddress: "0xF251dC6b5C579561aDA0584B5872BCda5E3b8b4f"
                }
              }
            },
            {
              key: {
                kind: "value",
                type: { bits: 16, typeClass: "uint" },
                interpretations: {},
                value: { asBN: toBN("2000") }
              },
              value: {
                kind: "value",
                type: { kind: "general", typeClass: "address" },
                interpretations: {},
                value: {
                  asAddress: "0x5DC447948b68486AAF772A49d55B17894E913557"
                }
              }
            },
            {
              key: {
                kind: "value",
                type: { bits: 16, typeClass: "uint" },
                interpretations: {},
                value: { asBN: toBN("2000") }
              },
              value: {
                kind: "value",
                type: { kind: "general", typeClass: "address" },
                interpretations: {},
                value: {
                  asAddress: "0x3513DAaeaC575DE3322b5a48C41b20a08997B87f"
                }
              }
            }
          ]
        }
      },
      {
        key: {
          kind: "value",
          type: { bits: 32, typeClass: "int" },
          interpretations: {},
          value: { asBN: toBN("200") }
        },
        value: {
          kind: "value",
          type: {
            keyType: { typeClass: "uint", bits: 16 },
            typeClass: "mapping",
            valueType: { kind: "general", typeClass: "address" }
          },
          interpretations: {},
          value: [
            {
              key: {
                kind: "value",
                type: { bits: 16, typeClass: "uint" },
                interpretations: {},
                value: { asBN: toBN("2000") }
              },
              value: {
                kind: "value",
                type: { kind: "general", typeClass: "address" },
                interpretations: {},
                value: {
                  asAddress: "0x0065D9F4d9E5b4D30dA494cC33a9F78B4B195faF"
                }
              }
            }
          ]
        }
      }
    ]
  }
} satisfies Record<string, Format.Values.MappingValue>;
