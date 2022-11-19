import type { Compilation } from "@truffle/compile-common";

export const fallbackCompilations: Compilation[] = [
  {
    sourceIndexes: [
      "/home/cliff/box/consensys/truffle-test-project/contracts/HelloWorld.sol",
      "/home/cliff/box/consensys/truffle-test-project/contracts/SimpleStorage.sol"
    ],
    contracts: [
      {
        contractName: "HelloWorld",
        abi: [
          {
            inputs: [],
            name: "greeting",
            outputs: [
              {
                internalType: "string",
                name: "",
                type: "string"
              }
            ],
            stateMutability: "view",
            type: "function"
          }
        ],
        metadata:
          '{"compiler":{"version":"0.8.16+commit.07a7930e"},"language":"Solidity","output":{"abi":[{"inputs":[],"name":"greeting","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/HelloWorld.sol":"HelloWorld"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/HelloWorld.sol":{"keccak256":"0x148693b0a3e98c2437f1dd0a99b5a12119b7a19d375a97a26add14864482affb","license":"MIT","urls":["bzz-raw://0fd32fa6f7723245016900316dd2087934cb1c6a39a6cd385360cf33a5fd3659","dweb:/ipfs/QmT4xR2xKrH6jE28c27hPDA73FjGjGzZEJKVQwMxEMskaJ"]}},"version":1}',
        devdoc: {
          kind: "dev",
          methods: {},
          version: 1
        },
        userdoc: {
          kind: "user",
          methods: {},
          version: 1
        },
        sourcePath:
          "/home/cliff/box/consensys/truffle-test-project/contracts/HelloWorld.sol",
        source:
          '// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.9.0;\n\ncontract HelloWorld {\n  string public greeting = "Hello World!";\n}\n',
        sourceMap:
          "66:66:0:-:0;;;90:39;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;66:66;;;;;;;;;;;;7:99:2;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;66:66:0:-;;;;;;;",
        deployedSourceMap:
          "66:66:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;90:39;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;7:99:2:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:246::-;368:1;378:113;392:6;389:1;386:13;378:113;;;477:1;472:3;468:11;462:18;458:1;453:3;449:11;442:39;414:2;411:1;407:10;402:15;;378:113;;;525:1;516:6;511:3;507:16;500:27;349:184;287:246;;;:::o;539:102::-;580:6;631:2;627:7;622:2;615:5;611:14;607:28;597:38;;539:102;;;:::o;647:377::-;735:3;763:39;796:5;763:39;:::i;:::-;818:71;882:6;877:3;818:71;:::i;:::-;811:78;;898:65;956:6;951:3;944:4;937:5;933:16;898:65;:::i;:::-;988:29;1010:6;988:29;:::i;:::-;983:3;979:39;972:46;;739:285;647:377;;;;:::o;1030:313::-;1143:4;1181:2;1170:9;1166:18;1158:26;;1230:9;1224:4;1220:20;1216:1;1205:9;1201:17;1194:47;1258:78;1331:4;1322:6;1258:78;:::i;:::-;1250:86;;1030:313;;;;:::o;1349:180::-;1397:77;1394:1;1387:88;1494:4;1491:1;1484:15;1518:4;1515:1;1508:15;1535:320;1579:6;1616:1;1610:4;1606:12;1596:22;;1663:1;1657:4;1653:12;1684:18;1674:81;;1740:4;1732:6;1728:17;1718:27;;1674:81;1802:2;1794:6;1791:14;1771:18;1768:38;1765:84;;1821:18;;:::i;:::-;1765:84;1586:269;1535:320;;;:::o",
        ast: {
          absolutePath: "project:/contracts/HelloWorld.sol",
          exportedSymbols: {
            HelloWorld: [5]
          },
          id: 6,
          license: "MIT",
          nodeType: "SourceUnit",
          nodes: [
            {
              id: 1,
              literals: ["solidity", ">=", "0.4", ".22", "<", "0.9", ".0"],
              nodeType: "PragmaDirective",
              src: "32:32:0"
            },
            {
              abstract: false,
              baseContracts: [],
              canonicalName: "HelloWorld",
              contractDependencies: [],
              contractKind: "contract",
              fullyImplemented: true,
              id: 5,
              linearizedBaseContracts: [5],
              name: "HelloWorld",
              nameLocation: "75:10:0",
              nodeType: "ContractDefinition",
              nodes: [
                {
                  constant: false,
                  functionSelector: "ef690cc0",
                  id: 4,
                  mutability: "mutable",
                  name: "greeting",
                  nameLocation: "104:8:0",
                  nodeType: "VariableDeclaration",
                  scope: 5,
                  src: "90:39:0",
                  stateVariable: true,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage",
                    typeString: "string"
                  },
                  typeName: {
                    id: 2,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "90:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  value: {
                    hexValue: "48656c6c6f20576f726c6421",
                    id: 3,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "string",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "115:14:0",
                    typeDescriptions: {
                      typeIdentifier:
                        "t_stringliteral_3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0",
                      typeString: 'literal_string "Hello World!"'
                    },
                    value: "Hello World!"
                  },
                  visibility: "public"
                }
              ],
              scope: 6,
              src: "66:66:0",
              usedErrors: []
            }
          ],
          src: "32:101:0"
        },
        bytecode: {
          linkReferences: [],
          bytes:
            "60806040526040518060400160405280600c81526020017f48656c6c6f20576f726c642100000000000000000000000000000000000000008152506000908161004891906102ab565b5034801561005557600080fd5b5061037d565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806100dc57607f821691505b6020821081036100ef576100ee610095565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026101577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261011a565b610161868361011a565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006101a86101a361019e84610179565b610183565b610179565b9050919050565b6000819050919050565b6101c28361018d565b6101d66101ce826101af565b848454610127565b825550505050565b600090565b6101eb6101de565b6101f68184846101b9565b505050565b5b8181101561021a5761020f6000826101e3565b6001810190506101fc565b5050565b601f82111561025f57610230816100f5565b6102398461010a565b81016020851015610248578190505b61025c6102548561010a565b8301826101fb565b50505b505050565b600082821c905092915050565b600061028260001984600802610264565b1980831691505092915050565b600061029b8383610271565b9150826002028217905092915050565b6102b48261005b565b67ffffffffffffffff8111156102cd576102cc610066565b5b6102d782546100c4565b6102e282828561021e565b600060209050601f8311600181146103155760008415610303578287015190505b61030d858261028f565b865550610375565b601f198416610323866100f5565b60005b8281101561034b57848901518255600182019150602085019450602081019050610326565b868310156103685784890151610364601f891682610271565b8355505b6001600288020188555050505b505050505050565b6102248061038c6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ef690cc014610030575b600080fd5b61003861004e565b604051610045919061016c565b60405180910390f35b6000805461005b906101bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610087906101bd565b80156100d45780601f106100a9576101008083540402835291602001916100d4565b820191906000526020600020905b8154815290600101906020018083116100b757829003601f168201915b505050505081565b600081519050919050565b600082825260208201905092915050565b60005b838110156101165780820151818401526020810190506100fb565b60008484015250505050565b6000601f19601f8301169050919050565b600061013e826100dc565b61014881856100e7565b93506101588185602086016100f8565b61016181610122565b840191505092915050565b600060208201905081810360008301526101868184610133565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806101d557607f821691505b6020821081036101e8576101e761018e565b5b5091905056fea2646970667358221220a78d2e74e571359427324c6e1d6611d885ce8617af38ce0ce39aa7086d14d56964736f6c63430008100033"
        },
        deployedBytecode: {
          linkReferences: [],
          bytes:
            "608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ef690cc014610030575b600080fd5b61003861004e565b604051610045919061016c565b60405180910390f35b6000805461005b906101bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610087906101bd565b80156100d45780601f106100a9576101008083540402835291602001916100d4565b820191906000526020600020905b8154815290600101906020018083116100b757829003601f168201915b505050505081565b600081519050919050565b600082825260208201905092915050565b60005b838110156101165780820151818401526020810190506100fb565b60008484015250505050565b6000601f19601f8301169050919050565b600061013e826100dc565b61014881856100e7565b93506101588185602086016100f8565b61016181610122565b840191505092915050565b600060208201905081810360008301526101868184610133565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806101d557607f821691505b6020821081036101e8576101e761018e565b5b5091905056fea2646970667358221220a78d2e74e571359427324c6e1d6611d885ce8617af38ce0ce39aa7086d14d56964736f6c63430008100033"
        },
        immutableReferences: {},
        generatedSources: [
          {
            ast: {
              nodeType: "YulBlock",
              src: "0:5231:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "66:40:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "77:22:2",
                        value: {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "93:5:2"
                            }
                          ],
                          functionName: {
                            name: "mload",
                            nodeType: "YulIdentifier",
                            src: "87:5:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "87:12:2"
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "77:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "array_length_t_string_memory_ptr",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "49:5:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "59:6:2",
                      type: ""
                    }
                  ],
                  src: "7:99:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "140:152:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "157:1:2",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "160:77:2",
                              type: "",
                              value:
                                "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "150:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "150:88:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "150:88:2"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "254:1:2",
                              type: "",
                              value: "4"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "257:4:2",
                              type: "",
                              value: "0x41"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "247:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "247:15:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "247:15:2"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "278:1:2",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "281:4:2",
                              type: "",
                              value: "0x24"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "271:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "271:15:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "271:15:2"
                      }
                    ]
                  },
                  name: "panic_error_0x41",
                  nodeType: "YulFunctionDefinition",
                  src: "112:180:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "326:152:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "343:1:2",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "346:77:2",
                              type: "",
                              value:
                                "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "336:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "336:88:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "336:88:2"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "440:1:2",
                              type: "",
                              value: "4"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "443:4:2",
                              type: "",
                              value: "0x22"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "433:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "433:15:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "433:15:2"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "464:1:2",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "467:4:2",
                              type: "",
                              value: "0x24"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "457:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "457:15:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "457:15:2"
                      }
                    ]
                  },
                  name: "panic_error_0x22",
                  nodeType: "YulFunctionDefinition",
                  src: "298:180:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "535:269:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "545:22:2",
                        value: {
                          arguments: [
                            {
                              name: "data",
                              nodeType: "YulIdentifier",
                              src: "559:4:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "565:1:2",
                              type: "",
                              value: "2"
                            }
                          ],
                          functionName: {
                            name: "div",
                            nodeType: "YulIdentifier",
                            src: "555:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "555:12:2"
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "545:6:2"
                          }
                        ]
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "576:38:2",
                        value: {
                          arguments: [
                            {
                              name: "data",
                              nodeType: "YulIdentifier",
                              src: "606:4:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "612:1:2",
                              type: "",
                              value: "1"
                            }
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "602:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "602:12:2"
                        },
                        variables: [
                          {
                            name: "outOfPlaceEncoding",
                            nodeType: "YulTypedName",
                            src: "580:18:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "653:51:2",
                          statements: [
                            {
                              nodeType: "YulAssignment",
                              src: "667:27:2",
                              value: {
                                arguments: [
                                  {
                                    name: "length",
                                    nodeType: "YulIdentifier",
                                    src: "681:6:2"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "689:4:2",
                                    type: "",
                                    value: "0x7f"
                                  }
                                ],
                                functionName: {
                                  name: "and",
                                  nodeType: "YulIdentifier",
                                  src: "677:3:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "677:17:2"
                              },
                              variableNames: [
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "667:6:2"
                                }
                              ]
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "outOfPlaceEncoding",
                              nodeType: "YulIdentifier",
                              src: "633:18:2"
                            }
                          ],
                          functionName: {
                            name: "iszero",
                            nodeType: "YulIdentifier",
                            src: "626:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "626:26:2"
                        },
                        nodeType: "YulIf",
                        src: "623:81:2"
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "756:42:2",
                          statements: [
                            {
                              expression: {
                                arguments: [],
                                functionName: {
                                  name: "panic_error_0x22",
                                  nodeType: "YulIdentifier",
                                  src: "770:16:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "770:18:2"
                              },
                              nodeType: "YulExpressionStatement",
                              src: "770:18:2"
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "outOfPlaceEncoding",
                              nodeType: "YulIdentifier",
                              src: "720:18:2"
                            },
                            {
                              arguments: [
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "743:6:2"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "751:2:2",
                                  type: "",
                                  value: "32"
                                }
                              ],
                              functionName: {
                                name: "lt",
                                nodeType: "YulIdentifier",
                                src: "740:2:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "740:14:2"
                            }
                          ],
                          functionName: {
                            name: "eq",
                            nodeType: "YulIdentifier",
                            src: "717:2:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "717:38:2"
                        },
                        nodeType: "YulIf",
                        src: "714:84:2"
                      }
                    ]
                  },
                  name: "extract_byte_array_length",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "data",
                      nodeType: "YulTypedName",
                      src: "519:4:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "528:6:2",
                      type: ""
                    }
                  ],
                  src: "484:320:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "864:87:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "874:11:2",
                        value: {
                          name: "ptr",
                          nodeType: "YulIdentifier",
                          src: "882:3:2"
                        },
                        variableNames: [
                          {
                            name: "data",
                            nodeType: "YulIdentifier",
                            src: "874:4:2"
                          }
                        ]
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "902:1:2",
                              type: "",
                              value: "0"
                            },
                            {
                              name: "ptr",
                              nodeType: "YulIdentifier",
                              src: "905:3:2"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "895:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "895:14:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "895:14:2"
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "918:26:2",
                        value: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "936:1:2",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "939:4:2",
                              type: "",
                              value: "0x20"
                            }
                          ],
                          functionName: {
                            name: "keccak256",
                            nodeType: "YulIdentifier",
                            src: "926:9:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "926:18:2"
                        },
                        variableNames: [
                          {
                            name: "data",
                            nodeType: "YulIdentifier",
                            src: "918:4:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "array_dataslot_t_string_storage",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "ptr",
                      nodeType: "YulTypedName",
                      src: "851:3:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "data",
                      nodeType: "YulTypedName",
                      src: "859:4:2",
                      type: ""
                    }
                  ],
                  src: "810:141:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1001:49:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "1011:33:2",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "1029:5:2"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1036:2:2",
                                  type: "",
                                  value: "31"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "1025:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1025:14:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1041:2:2",
                              type: "",
                              value: "32"
                            }
                          ],
                          functionName: {
                            name: "div",
                            nodeType: "YulIdentifier",
                            src: "1021:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1021:23:2"
                        },
                        variableNames: [
                          {
                            name: "result",
                            nodeType: "YulIdentifier",
                            src: "1011:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "divide_by_32_ceil",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "984:5:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "result",
                      nodeType: "YulTypedName",
                      src: "994:6:2",
                      type: ""
                    }
                  ],
                  src: "957:93:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1109:54:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "1119:37:2",
                        value: {
                          arguments: [
                            {
                              name: "bits",
                              nodeType: "YulIdentifier",
                              src: "1144:4:2"
                            },
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "1150:5:2"
                            }
                          ],
                          functionName: {
                            name: "shl",
                            nodeType: "YulIdentifier",
                            src: "1140:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1140:16:2"
                        },
                        variableNames: [
                          {
                            name: "newValue",
                            nodeType: "YulIdentifier",
                            src: "1119:8:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "shift_left_dynamic",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "bits",
                      nodeType: "YulTypedName",
                      src: "1084:4:2",
                      type: ""
                    },
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "1090:5:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "newValue",
                      nodeType: "YulTypedName",
                      src: "1100:8:2",
                      type: ""
                    }
                  ],
                  src: "1056:107:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1245:317:2",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "1255:35:2",
                        value: {
                          arguments: [
                            {
                              name: "shiftBytes",
                              nodeType: "YulIdentifier",
                              src: "1276:10:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1288:1:2",
                              type: "",
                              value: "8"
                            }
                          ],
                          functionName: {
                            name: "mul",
                            nodeType: "YulIdentifier",
                            src: "1272:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1272:18:2"
                        },
                        variables: [
                          {
                            name: "shiftBits",
                            nodeType: "YulTypedName",
                            src: "1259:9:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "1299:109:2",
                        value: {
                          arguments: [
                            {
                              name: "shiftBits",
                              nodeType: "YulIdentifier",
                              src: "1330:9:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1341:66:2",
                              type: "",
                              value:
                                "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          functionName: {
                            name: "shift_left_dynamic",
                            nodeType: "YulIdentifier",
                            src: "1311:18:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1311:97:2"
                        },
                        variables: [
                          {
                            name: "mask",
                            nodeType: "YulTypedName",
                            src: "1303:4:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "1417:51:2",
                        value: {
                          arguments: [
                            {
                              name: "shiftBits",
                              nodeType: "YulIdentifier",
                              src: "1448:9:2"
                            },
                            {
                              name: "toInsert",
                              nodeType: "YulIdentifier",
                              src: "1459:8:2"
                            }
                          ],
                          functionName: {
                            name: "shift_left_dynamic",
                            nodeType: "YulIdentifier",
                            src: "1429:18:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1429:39:2"
                        },
                        variableNames: [
                          {
                            name: "toInsert",
                            nodeType: "YulIdentifier",
                            src: "1417:8:2"
                          }
                        ]
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "1477:30:2",
                        value: {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "1490:5:2"
                            },
                            {
                              arguments: [
                                {
                                  name: "mask",
                                  nodeType: "YulIdentifier",
                                  src: "1501:4:2"
                                }
                              ],
                              functionName: {
                                name: "not",
                                nodeType: "YulIdentifier",
                                src: "1497:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1497:9:2"
                            }
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "1486:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1486:21:2"
                        },
                        variableNames: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "1477:5:2"
                          }
                        ]
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "1516:40:2",
                        value: {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "1529:5:2"
                            },
                            {
                              arguments: [
                                {
                                  name: "toInsert",
                                  nodeType: "YulIdentifier",
                                  src: "1540:8:2"
                                },
                                {
                                  name: "mask",
                                  nodeType: "YulIdentifier",
                                  src: "1550:4:2"
                                }
                              ],
                              functionName: {
                                name: "and",
                                nodeType: "YulIdentifier",
                                src: "1536:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1536:19:2"
                            }
                          ],
                          functionName: {
                            name: "or",
                            nodeType: "YulIdentifier",
                            src: "1526:2:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1526:30:2"
                        },
                        variableNames: [
                          {
                            name: "result",
                            nodeType: "YulIdentifier",
                            src: "1516:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "update_byte_slice_dynamic32",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "1206:5:2",
                      type: ""
                    },
                    {
                      name: "shiftBytes",
                      nodeType: "YulTypedName",
                      src: "1213:10:2",
                      type: ""
                    },
                    {
                      name: "toInsert",
                      nodeType: "YulTypedName",
                      src: "1225:8:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "result",
                      nodeType: "YulTypedName",
                      src: "1238:6:2",
                      type: ""
                    }
                  ],
                  src: "1169:393:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1613:32:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "1623:16:2",
                        value: {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1634:5:2"
                        },
                        variableNames: [
                          {
                            name: "cleaned",
                            nodeType: "YulIdentifier",
                            src: "1623:7:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "cleanup_t_uint256",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "1595:5:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "cleaned",
                      nodeType: "YulTypedName",
                      src: "1605:7:2",
                      type: ""
                    }
                  ],
                  src: "1568:77:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1683:28:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "1693:12:2",
                        value: {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1700:5:2"
                        },
                        variableNames: [
                          {
                            name: "ret",
                            nodeType: "YulIdentifier",
                            src: "1693:3:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "identity",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "1669:5:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "ret",
                      nodeType: "YulTypedName",
                      src: "1679:3:2",
                      type: ""
                    }
                  ],
                  src: "1651:60:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1777:82:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "1787:66:2",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "value",
                                      nodeType: "YulIdentifier",
                                      src: "1845:5:2"
                                    }
                                  ],
                                  functionName: {
                                    name: "cleanup_t_uint256",
                                    nodeType: "YulIdentifier",
                                    src: "1827:17:2"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "1827:24:2"
                                }
                              ],
                              functionName: {
                                name: "identity",
                                nodeType: "YulIdentifier",
                                src: "1818:8:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1818:34:2"
                            }
                          ],
                          functionName: {
                            name: "cleanup_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "1800:17:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1800:53:2"
                        },
                        variableNames: [
                          {
                            name: "converted",
                            nodeType: "YulIdentifier",
                            src: "1787:9:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "convert_t_uint256_to_t_uint256",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "1757:5:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "converted",
                      nodeType: "YulTypedName",
                      src: "1767:9:2",
                      type: ""
                    }
                  ],
                  src: "1717:142:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1912:28:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "1922:12:2",
                        value: {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1929:5:2"
                        },
                        variableNames: [
                          {
                            name: "ret",
                            nodeType: "YulIdentifier",
                            src: "1922:3:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "prepare_store_t_uint256",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "1898:5:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "ret",
                      nodeType: "YulTypedName",
                      src: "1908:3:2",
                      type: ""
                    }
                  ],
                  src: "1865:75:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2022:193:2",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2032:63:2",
                        value: {
                          arguments: [
                            {
                              name: "value_0",
                              nodeType: "YulIdentifier",
                              src: "2087:7:2"
                            }
                          ],
                          functionName: {
                            name: "convert_t_uint256_to_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "2056:30:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2056:39:2"
                        },
                        variables: [
                          {
                            name: "convertedValue_0",
                            nodeType: "YulTypedName",
                            src: "2036:16:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "slot",
                              nodeType: "YulIdentifier",
                              src: "2111:4:2"
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "slot",
                                      nodeType: "YulIdentifier",
                                      src: "2151:4:2"
                                    }
                                  ],
                                  functionName: {
                                    name: "sload",
                                    nodeType: "YulIdentifier",
                                    src: "2145:5:2"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "2145:11:2"
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "2158:6:2"
                                },
                                {
                                  arguments: [
                                    {
                                      name: "convertedValue_0",
                                      nodeType: "YulIdentifier",
                                      src: "2190:16:2"
                                    }
                                  ],
                                  functionName: {
                                    name: "prepare_store_t_uint256",
                                    nodeType: "YulIdentifier",
                                    src: "2166:23:2"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "2166:41:2"
                                }
                              ],
                              functionName: {
                                name: "update_byte_slice_dynamic32",
                                nodeType: "YulIdentifier",
                                src: "2117:27:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "2117:91:2"
                            }
                          ],
                          functionName: {
                            name: "sstore",
                            nodeType: "YulIdentifier",
                            src: "2104:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2104:105:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2104:105:2"
                      }
                    ]
                  },
                  name: "update_storage_value_t_uint256_to_t_uint256",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "slot",
                      nodeType: "YulTypedName",
                      src: "1999:4:2",
                      type: ""
                    },
                    {
                      name: "offset",
                      nodeType: "YulTypedName",
                      src: "2005:6:2",
                      type: ""
                    },
                    {
                      name: "value_0",
                      nodeType: "YulTypedName",
                      src: "2013:7:2",
                      type: ""
                    }
                  ],
                  src: "1946:269:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2270:24:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "2280:8:2",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "2287:1:2",
                          type: "",
                          value: "0"
                        },
                        variableNames: [
                          {
                            name: "ret",
                            nodeType: "YulIdentifier",
                            src: "2280:3:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "zero_value_for_split_t_uint256",
                  nodeType: "YulFunctionDefinition",
                  returnVariables: [
                    {
                      name: "ret",
                      nodeType: "YulTypedName",
                      src: "2266:3:2",
                      type: ""
                    }
                  ],
                  src: "2221:73:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2353:136:2",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2363:46:2",
                        value: {
                          arguments: [],
                          functionName: {
                            name: "zero_value_for_split_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "2377:30:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2377:32:2"
                        },
                        variables: [
                          {
                            name: "zero_0",
                            nodeType: "YulTypedName",
                            src: "2367:6:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "slot",
                              nodeType: "YulIdentifier",
                              src: "2462:4:2"
                            },
                            {
                              name: "offset",
                              nodeType: "YulIdentifier",
                              src: "2468:6:2"
                            },
                            {
                              name: "zero_0",
                              nodeType: "YulIdentifier",
                              src: "2476:6:2"
                            }
                          ],
                          functionName: {
                            name: "update_storage_value_t_uint256_to_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "2418:43:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2418:65:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2418:65:2"
                      }
                    ]
                  },
                  name: "storage_set_to_zero_t_uint256",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "slot",
                      nodeType: "YulTypedName",
                      src: "2339:4:2",
                      type: ""
                    },
                    {
                      name: "offset",
                      nodeType: "YulTypedName",
                      src: "2345:6:2",
                      type: ""
                    }
                  ],
                  src: "2300:189:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2545:136:2",
                    statements: [
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "2612:63:2",
                          statements: [
                            {
                              expression: {
                                arguments: [
                                  {
                                    name: "start",
                                    nodeType: "YulIdentifier",
                                    src: "2656:5:2"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "2663:1:2",
                                    type: "",
                                    value: "0"
                                  }
                                ],
                                functionName: {
                                  name: "storage_set_to_zero_t_uint256",
                                  nodeType: "YulIdentifier",
                                  src: "2626:29:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "2626:39:2"
                              },
                              nodeType: "YulExpressionStatement",
                              src: "2626:39:2"
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "start",
                              nodeType: "YulIdentifier",
                              src: "2565:5:2"
                            },
                            {
                              name: "end",
                              nodeType: "YulIdentifier",
                              src: "2572:3:2"
                            }
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "2562:2:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2562:14:2"
                        },
                        nodeType: "YulForLoop",
                        post: {
                          nodeType: "YulBlock",
                          src: "2577:26:2",
                          statements: [
                            {
                              nodeType: "YulAssignment",
                              src: "2579:22:2",
                              value: {
                                arguments: [
                                  {
                                    name: "start",
                                    nodeType: "YulIdentifier",
                                    src: "2592:5:2"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "2599:1:2",
                                    type: "",
                                    value: "1"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "2588:3:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "2588:13:2"
                              },
                              variableNames: [
                                {
                                  name: "start",
                                  nodeType: "YulIdentifier",
                                  src: "2579:5:2"
                                }
                              ]
                            }
                          ]
                        },
                        pre: {
                          nodeType: "YulBlock",
                          src: "2559:2:2",
                          statements: []
                        },
                        src: "2555:120:2"
                      }
                    ]
                  },
                  name: "clear_storage_range_t_bytes1",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "start",
                      nodeType: "YulTypedName",
                      src: "2533:5:2",
                      type: ""
                    },
                    {
                      name: "end",
                      nodeType: "YulTypedName",
                      src: "2540:3:2",
                      type: ""
                    }
                  ],
                  src: "2495:186:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2766:464:2",
                    statements: [
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "2792:431:2",
                          statements: [
                            {
                              nodeType: "YulVariableDeclaration",
                              src: "2806:54:2",
                              value: {
                                arguments: [
                                  {
                                    name: "array",
                                    nodeType: "YulIdentifier",
                                    src: "2854:5:2"
                                  }
                                ],
                                functionName: {
                                  name: "array_dataslot_t_string_storage",
                                  nodeType: "YulIdentifier",
                                  src: "2822:31:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "2822:38:2"
                              },
                              variables: [
                                {
                                  name: "dataArea",
                                  nodeType: "YulTypedName",
                                  src: "2810:8:2",
                                  type: ""
                                }
                              ]
                            },
                            {
                              nodeType: "YulVariableDeclaration",
                              src: "2873:63:2",
                              value: {
                                arguments: [
                                  {
                                    name: "dataArea",
                                    nodeType: "YulIdentifier",
                                    src: "2896:8:2"
                                  },
                                  {
                                    arguments: [
                                      {
                                        name: "startIndex",
                                        nodeType: "YulIdentifier",
                                        src: "2924:10:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "divide_by_32_ceil",
                                      nodeType: "YulIdentifier",
                                      src: "2906:17:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "2906:29:2"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "2892:3:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "2892:44:2"
                              },
                              variables: [
                                {
                                  name: "deleteStart",
                                  nodeType: "YulTypedName",
                                  src: "2877:11:2",
                                  type: ""
                                }
                              ]
                            },
                            {
                              body: {
                                nodeType: "YulBlock",
                                src: "3093:27:2",
                                statements: [
                                  {
                                    nodeType: "YulAssignment",
                                    src: "3095:23:2",
                                    value: {
                                      name: "dataArea",
                                      nodeType: "YulIdentifier",
                                      src: "3110:8:2"
                                    },
                                    variableNames: [
                                      {
                                        name: "deleteStart",
                                        nodeType: "YulIdentifier",
                                        src: "3095:11:2"
                                      }
                                    ]
                                  }
                                ]
                              },
                              condition: {
                                arguments: [
                                  {
                                    name: "startIndex",
                                    nodeType: "YulIdentifier",
                                    src: "3077:10:2"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "3089:2:2",
                                    type: "",
                                    value: "32"
                                  }
                                ],
                                functionName: {
                                  name: "lt",
                                  nodeType: "YulIdentifier",
                                  src: "3074:2:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "3074:18:2"
                              },
                              nodeType: "YulIf",
                              src: "3071:49:2"
                            },
                            {
                              expression: {
                                arguments: [
                                  {
                                    name: "deleteStart",
                                    nodeType: "YulIdentifier",
                                    src: "3162:11:2"
                                  },
                                  {
                                    arguments: [
                                      {
                                        name: "dataArea",
                                        nodeType: "YulIdentifier",
                                        src: "3179:8:2"
                                      },
                                      {
                                        arguments: [
                                          {
                                            name: "len",
                                            nodeType: "YulIdentifier",
                                            src: "3207:3:2"
                                          }
                                        ],
                                        functionName: {
                                          name: "divide_by_32_ceil",
                                          nodeType: "YulIdentifier",
                                          src: "3189:17:2"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "3189:22:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "3175:3:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "3175:37:2"
                                  }
                                ],
                                functionName: {
                                  name: "clear_storage_range_t_bytes1",
                                  nodeType: "YulIdentifier",
                                  src: "3133:28:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "3133:80:2"
                              },
                              nodeType: "YulExpressionStatement",
                              src: "3133:80:2"
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "len",
                              nodeType: "YulIdentifier",
                              src: "2783:3:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2788:2:2",
                              type: "",
                              value: "31"
                            }
                          ],
                          functionName: {
                            name: "gt",
                            nodeType: "YulIdentifier",
                            src: "2780:2:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2780:11:2"
                        },
                        nodeType: "YulIf",
                        src: "2777:446:2"
                      }
                    ]
                  },
                  name: "clean_up_bytearray_end_slots_t_string_storage",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "array",
                      nodeType: "YulTypedName",
                      src: "2742:5:2",
                      type: ""
                    },
                    {
                      name: "len",
                      nodeType: "YulTypedName",
                      src: "2749:3:2",
                      type: ""
                    },
                    {
                      name: "startIndex",
                      nodeType: "YulTypedName",
                      src: "2754:10:2",
                      type: ""
                    }
                  ],
                  src: "2687:543:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3299:54:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "3309:37:2",
                        value: {
                          arguments: [
                            {
                              name: "bits",
                              nodeType: "YulIdentifier",
                              src: "3334:4:2"
                            },
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "3340:5:2"
                            }
                          ],
                          functionName: {
                            name: "shr",
                            nodeType: "YulIdentifier",
                            src: "3330:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "3330:16:2"
                        },
                        variableNames: [
                          {
                            name: "newValue",
                            nodeType: "YulIdentifier",
                            src: "3309:8:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "shift_right_unsigned_dynamic",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "bits",
                      nodeType: "YulTypedName",
                      src: "3274:4:2",
                      type: ""
                    },
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "3280:5:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "newValue",
                      nodeType: "YulTypedName",
                      src: "3290:8:2",
                      type: ""
                    }
                  ],
                  src: "3236:117:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3410:118:2",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "3420:68:2",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "3469:1:2",
                                      type: "",
                                      value: "8"
                                    },
                                    {
                                      name: "bytes",
                                      nodeType: "YulIdentifier",
                                      src: "3472:5:2"
                                    }
                                  ],
                                  functionName: {
                                    name: "mul",
                                    nodeType: "YulIdentifier",
                                    src: "3465:3:2"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "3465:13:2"
                                },
                                {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "3484:1:2",
                                      type: "",
                                      value: "0"
                                    }
                                  ],
                                  functionName: {
                                    name: "not",
                                    nodeType: "YulIdentifier",
                                    src: "3480:3:2"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "3480:6:2"
                                }
                              ],
                              functionName: {
                                name: "shift_right_unsigned_dynamic",
                                nodeType: "YulIdentifier",
                                src: "3436:28:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3436:51:2"
                            }
                          ],
                          functionName: {
                            name: "not",
                            nodeType: "YulIdentifier",
                            src: "3432:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "3432:56:2"
                        },
                        variables: [
                          {
                            name: "mask",
                            nodeType: "YulTypedName",
                            src: "3424:4:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "3497:25:2",
                        value: {
                          arguments: [
                            {
                              name: "data",
                              nodeType: "YulIdentifier",
                              src: "3511:4:2"
                            },
                            {
                              name: "mask",
                              nodeType: "YulIdentifier",
                              src: "3517:4:2"
                            }
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "3507:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "3507:15:2"
                        },
                        variableNames: [
                          {
                            name: "result",
                            nodeType: "YulIdentifier",
                            src: "3497:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "mask_bytes_dynamic",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "data",
                      nodeType: "YulTypedName",
                      src: "3387:4:2",
                      type: ""
                    },
                    {
                      name: "bytes",
                      nodeType: "YulTypedName",
                      src: "3393:5:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "result",
                      nodeType: "YulTypedName",
                      src: "3403:6:2",
                      type: ""
                    }
                  ],
                  src: "3359:169:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3614:214:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "3747:37:2",
                        value: {
                          arguments: [
                            {
                              name: "data",
                              nodeType: "YulIdentifier",
                              src: "3774:4:2"
                            },
                            {
                              name: "len",
                              nodeType: "YulIdentifier",
                              src: "3780:3:2"
                            }
                          ],
                          functionName: {
                            name: "mask_bytes_dynamic",
                            nodeType: "YulIdentifier",
                            src: "3755:18:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "3755:29:2"
                        },
                        variableNames: [
                          {
                            name: "data",
                            nodeType: "YulIdentifier",
                            src: "3747:4:2"
                          }
                        ]
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "3793:29:2",
                        value: {
                          arguments: [
                            {
                              name: "data",
                              nodeType: "YulIdentifier",
                              src: "3804:4:2"
                            },
                            {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "3814:1:2",
                                  type: "",
                                  value: "2"
                                },
                                {
                                  name: "len",
                                  nodeType: "YulIdentifier",
                                  src: "3817:3:2"
                                }
                              ],
                              functionName: {
                                name: "mul",
                                nodeType: "YulIdentifier",
                                src: "3810:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3810:11:2"
                            }
                          ],
                          functionName: {
                            name: "or",
                            nodeType: "YulIdentifier",
                            src: "3801:2:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "3801:21:2"
                        },
                        variableNames: [
                          {
                            name: "used",
                            nodeType: "YulIdentifier",
                            src: "3793:4:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "extract_used_part_and_set_length_of_short_byte_array",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "data",
                      nodeType: "YulTypedName",
                      src: "3595:4:2",
                      type: ""
                    },
                    {
                      name: "len",
                      nodeType: "YulTypedName",
                      src: "3601:3:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "used",
                      nodeType: "YulTypedName",
                      src: "3609:4:2",
                      type: ""
                    }
                  ],
                  src: "3533:295:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3925:1303:2",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "3936:51:2",
                        value: {
                          arguments: [
                            {
                              name: "src",
                              nodeType: "YulIdentifier",
                              src: "3983:3:2"
                            }
                          ],
                          functionName: {
                            name: "array_length_t_string_memory_ptr",
                            nodeType: "YulIdentifier",
                            src: "3950:32:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "3950:37:2"
                        },
                        variables: [
                          {
                            name: "newLen",
                            nodeType: "YulTypedName",
                            src: "3940:6:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "4072:22:2",
                          statements: [
                            {
                              expression: {
                                arguments: [],
                                functionName: {
                                  name: "panic_error_0x41",
                                  nodeType: "YulIdentifier",
                                  src: "4074:16:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "4074:18:2"
                              },
                              nodeType: "YulExpressionStatement",
                              src: "4074:18:2"
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "newLen",
                              nodeType: "YulIdentifier",
                              src: "4044:6:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4052:18:2",
                              type: "",
                              value: "0xffffffffffffffff"
                            }
                          ],
                          functionName: {
                            name: "gt",
                            nodeType: "YulIdentifier",
                            src: "4041:2:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "4041:30:2"
                        },
                        nodeType: "YulIf",
                        src: "4038:56:2"
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "4104:52:2",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "4150:4:2"
                                }
                              ],
                              functionName: {
                                name: "sload",
                                nodeType: "YulIdentifier",
                                src: "4144:5:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "4144:11:2"
                            }
                          ],
                          functionName: {
                            name: "extract_byte_array_length",
                            nodeType: "YulIdentifier",
                            src: "4118:25:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "4118:38:2"
                        },
                        variables: [
                          {
                            name: "oldLen",
                            nodeType: "YulTypedName",
                            src: "4108:6:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "slot",
                              nodeType: "YulIdentifier",
                              src: "4249:4:2"
                            },
                            {
                              name: "oldLen",
                              nodeType: "YulIdentifier",
                              src: "4255:6:2"
                            },
                            {
                              name: "newLen",
                              nodeType: "YulIdentifier",
                              src: "4263:6:2"
                            }
                          ],
                          functionName: {
                            name: "clean_up_bytearray_end_slots_t_string_storage",
                            nodeType: "YulIdentifier",
                            src: "4203:45:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "4203:67:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4203:67:2"
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "4280:18:2",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4297:1:2",
                          type: "",
                          value: "0"
                        },
                        variables: [
                          {
                            name: "srcOffset",
                            nodeType: "YulTypedName",
                            src: "4284:9:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "4308:17:2",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4321:4:2",
                          type: "",
                          value: "0x20"
                        },
                        variableNames: [
                          {
                            name: "srcOffset",
                            nodeType: "YulIdentifier",
                            src: "4308:9:2"
                          }
                        ]
                      },
                      {
                        cases: [
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "4372:611:2",
                              statements: [
                                {
                                  nodeType: "YulVariableDeclaration",
                                  src: "4386:37:2",
                                  value: {
                                    arguments: [
                                      {
                                        name: "newLen",
                                        nodeType: "YulIdentifier",
                                        src: "4405:6:2"
                                      },
                                      {
                                        arguments: [
                                          {
                                            kind: "number",
                                            nodeType: "YulLiteral",
                                            src: "4417:4:2",
                                            type: "",
                                            value: "0x1f"
                                          }
                                        ],
                                        functionName: {
                                          name: "not",
                                          nodeType: "YulIdentifier",
                                          src: "4413:3:2"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4413:9:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "and",
                                      nodeType: "YulIdentifier",
                                      src: "4401:3:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4401:22:2"
                                  },
                                  variables: [
                                    {
                                      name: "loopEnd",
                                      nodeType: "YulTypedName",
                                      src: "4390:7:2",
                                      type: ""
                                    }
                                  ]
                                },
                                {
                                  nodeType: "YulVariableDeclaration",
                                  src: "4437:51:2",
                                  value: {
                                    arguments: [
                                      {
                                        name: "slot",
                                        nodeType: "YulIdentifier",
                                        src: "4483:4:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "array_dataslot_t_string_storage",
                                      nodeType: "YulIdentifier",
                                      src: "4451:31:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4451:37:2"
                                  },
                                  variables: [
                                    {
                                      name: "dstPtr",
                                      nodeType: "YulTypedName",
                                      src: "4441:6:2",
                                      type: ""
                                    }
                                  ]
                                },
                                {
                                  nodeType: "YulVariableDeclaration",
                                  src: "4501:10:2",
                                  value: {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "4510:1:2",
                                    type: "",
                                    value: "0"
                                  },
                                  variables: [
                                    {
                                      name: "i",
                                      nodeType: "YulTypedName",
                                      src: "4505:1:2",
                                      type: ""
                                    }
                                  ]
                                },
                                {
                                  body: {
                                    nodeType: "YulBlock",
                                    src: "4569:163:2",
                                    statements: [
                                      {
                                        expression: {
                                          arguments: [
                                            {
                                              name: "dstPtr",
                                              nodeType: "YulIdentifier",
                                              src: "4594:6:2"
                                            },
                                            {
                                              arguments: [
                                                {
                                                  arguments: [
                                                    {
                                                      name: "src",
                                                      nodeType: "YulIdentifier",
                                                      src: "4612:3:2"
                                                    },
                                                    {
                                                      name: "srcOffset",
                                                      nodeType: "YulIdentifier",
                                                      src: "4617:9:2"
                                                    }
                                                  ],
                                                  functionName: {
                                                    name: "add",
                                                    nodeType: "YulIdentifier",
                                                    src: "4608:3:2"
                                                  },
                                                  nodeType: "YulFunctionCall",
                                                  src: "4608:19:2"
                                                }
                                              ],
                                              functionName: {
                                                name: "mload",
                                                nodeType: "YulIdentifier",
                                                src: "4602:5:2"
                                              },
                                              nodeType: "YulFunctionCall",
                                              src: "4602:26:2"
                                            }
                                          ],
                                          functionName: {
                                            name: "sstore",
                                            nodeType: "YulIdentifier",
                                            src: "4587:6:2"
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "4587:42:2"
                                        },
                                        nodeType: "YulExpressionStatement",
                                        src: "4587:42:2"
                                      },
                                      {
                                        nodeType: "YulAssignment",
                                        src: "4646:24:2",
                                        value: {
                                          arguments: [
                                            {
                                              name: "dstPtr",
                                              nodeType: "YulIdentifier",
                                              src: "4660:6:2"
                                            },
                                            {
                                              kind: "number",
                                              nodeType: "YulLiteral",
                                              src: "4668:1:2",
                                              type: "",
                                              value: "1"
                                            }
                                          ],
                                          functionName: {
                                            name: "add",
                                            nodeType: "YulIdentifier",
                                            src: "4656:3:2"
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "4656:14:2"
                                        },
                                        variableNames: [
                                          {
                                            name: "dstPtr",
                                            nodeType: "YulIdentifier",
                                            src: "4646:6:2"
                                          }
                                        ]
                                      },
                                      {
                                        nodeType: "YulAssignment",
                                        src: "4687:31:2",
                                        value: {
                                          arguments: [
                                            {
                                              name: "srcOffset",
                                              nodeType: "YulIdentifier",
                                              src: "4704:9:2"
                                            },
                                            {
                                              kind: "number",
                                              nodeType: "YulLiteral",
                                              src: "4715:2:2",
                                              type: "",
                                              value: "32"
                                            }
                                          ],
                                          functionName: {
                                            name: "add",
                                            nodeType: "YulIdentifier",
                                            src: "4700:3:2"
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "4700:18:2"
                                        },
                                        variableNames: [
                                          {
                                            name: "srcOffset",
                                            nodeType: "YulIdentifier",
                                            src: "4687:9:2"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  condition: {
                                    arguments: [
                                      {
                                        name: "i",
                                        nodeType: "YulIdentifier",
                                        src: "4535:1:2"
                                      },
                                      {
                                        name: "loopEnd",
                                        nodeType: "YulIdentifier",
                                        src: "4538:7:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "lt",
                                      nodeType: "YulIdentifier",
                                      src: "4532:2:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4532:14:2"
                                  },
                                  nodeType: "YulForLoop",
                                  post: {
                                    nodeType: "YulBlock",
                                    src: "4547:21:2",
                                    statements: [
                                      {
                                        nodeType: "YulAssignment",
                                        src: "4549:17:2",
                                        value: {
                                          arguments: [
                                            {
                                              name: "i",
                                              nodeType: "YulIdentifier",
                                              src: "4558:1:2"
                                            },
                                            {
                                              kind: "number",
                                              nodeType: "YulLiteral",
                                              src: "4561:4:2",
                                              type: "",
                                              value: "0x20"
                                            }
                                          ],
                                          functionName: {
                                            name: "add",
                                            nodeType: "YulIdentifier",
                                            src: "4554:3:2"
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "4554:12:2"
                                        },
                                        variableNames: [
                                          {
                                            name: "i",
                                            nodeType: "YulIdentifier",
                                            src: "4549:1:2"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  pre: {
                                    nodeType: "YulBlock",
                                    src: "4528:3:2",
                                    statements: []
                                  },
                                  src: "4524:208:2"
                                },
                                {
                                  body: {
                                    nodeType: "YulBlock",
                                    src: "4768:156:2",
                                    statements: [
                                      {
                                        nodeType: "YulVariableDeclaration",
                                        src: "4786:43:2",
                                        value: {
                                          arguments: [
                                            {
                                              arguments: [
                                                {
                                                  name: "src",
                                                  nodeType: "YulIdentifier",
                                                  src: "4813:3:2"
                                                },
                                                {
                                                  name: "srcOffset",
                                                  nodeType: "YulIdentifier",
                                                  src: "4818:9:2"
                                                }
                                              ],
                                              functionName: {
                                                name: "add",
                                                nodeType: "YulIdentifier",
                                                src: "4809:3:2"
                                              },
                                              nodeType: "YulFunctionCall",
                                              src: "4809:19:2"
                                            }
                                          ],
                                          functionName: {
                                            name: "mload",
                                            nodeType: "YulIdentifier",
                                            src: "4803:5:2"
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "4803:26:2"
                                        },
                                        variables: [
                                          {
                                            name: "lastValue",
                                            nodeType: "YulTypedName",
                                            src: "4790:9:2",
                                            type: ""
                                          }
                                        ]
                                      },
                                      {
                                        expression: {
                                          arguments: [
                                            {
                                              name: "dstPtr",
                                              nodeType: "YulIdentifier",
                                              src: "4853:6:2"
                                            },
                                            {
                                              arguments: [
                                                {
                                                  name: "lastValue",
                                                  nodeType: "YulIdentifier",
                                                  src: "4880:9:2"
                                                },
                                                {
                                                  arguments: [
                                                    {
                                                      name: "newLen",
                                                      nodeType: "YulIdentifier",
                                                      src: "4895:6:2"
                                                    },
                                                    {
                                                      kind: "number",
                                                      nodeType: "YulLiteral",
                                                      src: "4903:4:2",
                                                      type: "",
                                                      value: "0x1f"
                                                    }
                                                  ],
                                                  functionName: {
                                                    name: "and",
                                                    nodeType: "YulIdentifier",
                                                    src: "4891:3:2"
                                                  },
                                                  nodeType: "YulFunctionCall",
                                                  src: "4891:17:2"
                                                }
                                              ],
                                              functionName: {
                                                name: "mask_bytes_dynamic",
                                                nodeType: "YulIdentifier",
                                                src: "4861:18:2"
                                              },
                                              nodeType: "YulFunctionCall",
                                              src: "4861:48:2"
                                            }
                                          ],
                                          functionName: {
                                            name: "sstore",
                                            nodeType: "YulIdentifier",
                                            src: "4846:6:2"
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "4846:64:2"
                                        },
                                        nodeType: "YulExpressionStatement",
                                        src: "4846:64:2"
                                      }
                                    ]
                                  },
                                  condition: {
                                    arguments: [
                                      {
                                        name: "loopEnd",
                                        nodeType: "YulIdentifier",
                                        src: "4751:7:2"
                                      },
                                      {
                                        name: "newLen",
                                        nodeType: "YulIdentifier",
                                        src: "4760:6:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "lt",
                                      nodeType: "YulIdentifier",
                                      src: "4748:2:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4748:19:2"
                                  },
                                  nodeType: "YulIf",
                                  src: "4745:179:2"
                                },
                                {
                                  expression: {
                                    arguments: [
                                      {
                                        name: "slot",
                                        nodeType: "YulIdentifier",
                                        src: "4944:4:2"
                                      },
                                      {
                                        arguments: [
                                          {
                                            arguments: [
                                              {
                                                name: "newLen",
                                                nodeType: "YulIdentifier",
                                                src: "4958:6:2"
                                              },
                                              {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4966:1:2",
                                                type: "",
                                                value: "2"
                                              }
                                            ],
                                            functionName: {
                                              name: "mul",
                                              nodeType: "YulIdentifier",
                                              src: "4954:3:2"
                                            },
                                            nodeType: "YulFunctionCall",
                                            src: "4954:14:2"
                                          },
                                          {
                                            kind: "number",
                                            nodeType: "YulLiteral",
                                            src: "4970:1:2",
                                            type: "",
                                            value: "1"
                                          }
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "4950:3:2"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4950:22:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "sstore",
                                      nodeType: "YulIdentifier",
                                      src: "4937:6:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4937:36:2"
                                  },
                                  nodeType: "YulExpressionStatement",
                                  src: "4937:36:2"
                                }
                              ]
                            },
                            nodeType: "YulCase",
                            src: "4365:618:2",
                            value: {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4370:1:2",
                              type: "",
                              value: "1"
                            }
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "5000:222:2",
                              statements: [
                                {
                                  nodeType: "YulVariableDeclaration",
                                  src: "5014:14:2",
                                  value: {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "5027:1:2",
                                    type: "",
                                    value: "0"
                                  },
                                  variables: [
                                    {
                                      name: "value",
                                      nodeType: "YulTypedName",
                                      src: "5018:5:2",
                                      type: ""
                                    }
                                  ]
                                },
                                {
                                  body: {
                                    nodeType: "YulBlock",
                                    src: "5051:67:2",
                                    statements: [
                                      {
                                        nodeType: "YulAssignment",
                                        src: "5069:35:2",
                                        value: {
                                          arguments: [
                                            {
                                              arguments: [
                                                {
                                                  name: "src",
                                                  nodeType: "YulIdentifier",
                                                  src: "5088:3:2"
                                                },
                                                {
                                                  name: "srcOffset",
                                                  nodeType: "YulIdentifier",
                                                  src: "5093:9:2"
                                                }
                                              ],
                                              functionName: {
                                                name: "add",
                                                nodeType: "YulIdentifier",
                                                src: "5084:3:2"
                                              },
                                              nodeType: "YulFunctionCall",
                                              src: "5084:19:2"
                                            }
                                          ],
                                          functionName: {
                                            name: "mload",
                                            nodeType: "YulIdentifier",
                                            src: "5078:5:2"
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "5078:26:2"
                                        },
                                        variableNames: [
                                          {
                                            name: "value",
                                            nodeType: "YulIdentifier",
                                            src: "5069:5:2"
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  condition: {
                                    name: "newLen",
                                    nodeType: "YulIdentifier",
                                    src: "5044:6:2"
                                  },
                                  nodeType: "YulIf",
                                  src: "5041:77:2"
                                },
                                {
                                  expression: {
                                    arguments: [
                                      {
                                        name: "slot",
                                        nodeType: "YulIdentifier",
                                        src: "5138:4:2"
                                      },
                                      {
                                        arguments: [
                                          {
                                            name: "value",
                                            nodeType: "YulIdentifier",
                                            src: "5197:5:2"
                                          },
                                          {
                                            name: "newLen",
                                            nodeType: "YulIdentifier",
                                            src: "5204:6:2"
                                          }
                                        ],
                                        functionName: {
                                          name: "extract_used_part_and_set_length_of_short_byte_array",
                                          nodeType: "YulIdentifier",
                                          src: "5144:52:2"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "5144:67:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "sstore",
                                      nodeType: "YulIdentifier",
                                      src: "5131:6:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "5131:81:2"
                                  },
                                  nodeType: "YulExpressionStatement",
                                  src: "5131:81:2"
                                }
                              ]
                            },
                            nodeType: "YulCase",
                            src: "4992:230:2",
                            value: "default"
                          }
                        ],
                        expression: {
                          arguments: [
                            {
                              name: "newLen",
                              nodeType: "YulIdentifier",
                              src: "4345:6:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4353:2:2",
                              type: "",
                              value: "31"
                            }
                          ],
                          functionName: {
                            name: "gt",
                            nodeType: "YulIdentifier",
                            src: "4342:2:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "4342:14:2"
                        },
                        nodeType: "YulSwitch",
                        src: "4335:887:2"
                      }
                    ]
                  },
                  name: "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "slot",
                      nodeType: "YulTypedName",
                      src: "3914:4:2",
                      type: ""
                    },
                    {
                      name: "src",
                      nodeType: "YulTypedName",
                      src: "3920:3:2",
                      type: ""
                    }
                  ],
                  src: "3833:1395:2"
                }
              ]
            },
            contents:
              "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n}\n",
            id: 2,
            language: "Yul",
            name: "#utility.yul"
          }
        ],
        deployedGeneratedSources: [
          {
            ast: {
              nodeType: "YulBlock",
              src: "0:1858:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "66:40:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "77:22:2",
                        value: {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "93:5:2"
                            }
                          ],
                          functionName: {
                            name: "mload",
                            nodeType: "YulIdentifier",
                            src: "87:5:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "87:12:2"
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "77:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "array_length_t_string_memory_ptr",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "49:5:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "59:6:2",
                      type: ""
                    }
                  ],
                  src: "7:99:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "208:73:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              name: "pos",
                              nodeType: "YulIdentifier",
                              src: "225:3:2"
                            },
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "230:6:2"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "218:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "218:19:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "218:19:2"
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "246:29:2",
                        value: {
                          arguments: [
                            {
                              name: "pos",
                              nodeType: "YulIdentifier",
                              src: "265:3:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "270:4:2",
                              type: "",
                              value: "0x20"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "261:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "261:14:2"
                        },
                        variableNames: [
                          {
                            name: "updated_pos",
                            nodeType: "YulIdentifier",
                            src: "246:11:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "pos",
                      nodeType: "YulTypedName",
                      src: "180:3:2",
                      type: ""
                    },
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "185:6:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "updated_pos",
                      nodeType: "YulTypedName",
                      src: "196:11:2",
                      type: ""
                    }
                  ],
                  src: "112:169:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "349:184:2",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "359:10:2",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "368:1:2",
                          type: "",
                          value: "0"
                        },
                        variables: [
                          {
                            name: "i",
                            nodeType: "YulTypedName",
                            src: "363:1:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "428:63:2",
                          statements: [
                            {
                              expression: {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        name: "dst",
                                        nodeType: "YulIdentifier",
                                        src: "453:3:2"
                                      },
                                      {
                                        name: "i",
                                        nodeType: "YulIdentifier",
                                        src: "458:1:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "449:3:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "449:11:2"
                                  },
                                  {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "src",
                                            nodeType: "YulIdentifier",
                                            src: "472:3:2"
                                          },
                                          {
                                            name: "i",
                                            nodeType: "YulIdentifier",
                                            src: "477:1:2"
                                          }
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "468:3:2"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "468:11:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "mload",
                                      nodeType: "YulIdentifier",
                                      src: "462:5:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "462:18:2"
                                  }
                                ],
                                functionName: {
                                  name: "mstore",
                                  nodeType: "YulIdentifier",
                                  src: "442:6:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "442:39:2"
                              },
                              nodeType: "YulExpressionStatement",
                              src: "442:39:2"
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "389:1:2"
                            },
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "392:6:2"
                            }
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "386:2:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "386:13:2"
                        },
                        nodeType: "YulForLoop",
                        post: {
                          nodeType: "YulBlock",
                          src: "400:19:2",
                          statements: [
                            {
                              nodeType: "YulAssignment",
                              src: "402:15:2",
                              value: {
                                arguments: [
                                  {
                                    name: "i",
                                    nodeType: "YulIdentifier",
                                    src: "411:1:2"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "414:2:2",
                                    type: "",
                                    value: "32"
                                  }
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "407:3:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "407:10:2"
                              },
                              variableNames: [
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "402:1:2"
                                }
                              ]
                            }
                          ]
                        },
                        pre: {
                          nodeType: "YulBlock",
                          src: "382:3:2",
                          statements: []
                        },
                        src: "378:113:2"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "511:3:2"
                                },
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "516:6:2"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "507:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "507:16:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "525:1:2",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "500:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "500:27:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "500:27:2"
                      }
                    ]
                  },
                  name: "copy_memory_to_memory_with_cleanup",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "src",
                      nodeType: "YulTypedName",
                      src: "331:3:2",
                      type: ""
                    },
                    {
                      name: "dst",
                      nodeType: "YulTypedName",
                      src: "336:3:2",
                      type: ""
                    },
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "341:6:2",
                      type: ""
                    }
                  ],
                  src: "287:246:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "587:54:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "597:38:2",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "615:5:2"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "622:2:2",
                                  type: "",
                                  value: "31"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "611:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "611:14:2"
                            },
                            {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "631:2:2",
                                  type: "",
                                  value: "31"
                                }
                              ],
                              functionName: {
                                name: "not",
                                nodeType: "YulIdentifier",
                                src: "627:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "627:7:2"
                            }
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "607:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "607:28:2"
                        },
                        variableNames: [
                          {
                            name: "result",
                            nodeType: "YulIdentifier",
                            src: "597:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "round_up_to_mul_of_32",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "570:5:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "result",
                      nodeType: "YulTypedName",
                      src: "580:6:2",
                      type: ""
                    }
                  ],
                  src: "539:102:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "739:285:2",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "749:53:2",
                        value: {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "796:5:2"
                            }
                          ],
                          functionName: {
                            name: "array_length_t_string_memory_ptr",
                            nodeType: "YulIdentifier",
                            src: "763:32:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "763:39:2"
                        },
                        variables: [
                          {
                            name: "length",
                            nodeType: "YulTypedName",
                            src: "753:6:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "811:78:2",
                        value: {
                          arguments: [
                            {
                              name: "pos",
                              nodeType: "YulIdentifier",
                              src: "877:3:2"
                            },
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "882:6:2"
                            }
                          ],
                          functionName: {
                            name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            nodeType: "YulIdentifier",
                            src: "818:58:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "818:71:2"
                        },
                        variableNames: [
                          {
                            name: "pos",
                            nodeType: "YulIdentifier",
                            src: "811:3:2"
                          }
                        ]
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "937:5:2"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "944:4:2",
                                  type: "",
                                  value: "0x20"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "933:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "933:16:2"
                            },
                            {
                              name: "pos",
                              nodeType: "YulIdentifier",
                              src: "951:3:2"
                            },
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "956:6:2"
                            }
                          ],
                          functionName: {
                            name: "copy_memory_to_memory_with_cleanup",
                            nodeType: "YulIdentifier",
                            src: "898:34:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "898:65:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "898:65:2"
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "972:46:2",
                        value: {
                          arguments: [
                            {
                              name: "pos",
                              nodeType: "YulIdentifier",
                              src: "983:3:2"
                            },
                            {
                              arguments: [
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "1010:6:2"
                                }
                              ],
                              functionName: {
                                name: "round_up_to_mul_of_32",
                                nodeType: "YulIdentifier",
                                src: "988:21:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "988:29:2"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "979:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "979:39:2"
                        },
                        variableNames: [
                          {
                            name: "end",
                            nodeType: "YulIdentifier",
                            src: "972:3:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "720:5:2",
                      type: ""
                    },
                    {
                      name: "pos",
                      nodeType: "YulTypedName",
                      src: "727:3:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "end",
                      nodeType: "YulTypedName",
                      src: "735:3:2",
                      type: ""
                    }
                  ],
                  src: "647:377:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1148:195:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "1158:26:2",
                        value: {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "1170:9:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1181:2:2",
                              type: "",
                              value: "32"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "1166:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1166:18:2"
                        },
                        variableNames: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "1158:4:2"
                          }
                        ]
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "1205:9:2"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1216:1:2",
                                  type: "",
                                  value: "0"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "1201:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1201:17:2"
                            },
                            {
                              arguments: [
                                {
                                  name: "tail",
                                  nodeType: "YulIdentifier",
                                  src: "1224:4:2"
                                },
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "1230:9:2"
                                }
                              ],
                              functionName: {
                                name: "sub",
                                nodeType: "YulIdentifier",
                                src: "1220:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1220:20:2"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "1194:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1194:47:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1194:47:2"
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "1250:86:2",
                        value: {
                          arguments: [
                            {
                              name: "value0",
                              nodeType: "YulIdentifier",
                              src: "1322:6:2"
                            },
                            {
                              name: "tail",
                              nodeType: "YulIdentifier",
                              src: "1331:4:2"
                            }
                          ],
                          functionName: {
                            name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                            nodeType: "YulIdentifier",
                            src: "1258:63:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1258:78:2"
                        },
                        variableNames: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "1250:4:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "headStart",
                      nodeType: "YulTypedName",
                      src: "1120:9:2",
                      type: ""
                    },
                    {
                      name: "value0",
                      nodeType: "YulTypedName",
                      src: "1132:6:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "tail",
                      nodeType: "YulTypedName",
                      src: "1143:4:2",
                      type: ""
                    }
                  ],
                  src: "1030:313:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1377:152:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1394:1:2",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1397:77:2",
                              type: "",
                              value:
                                "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "1387:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1387:88:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1387:88:2"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1491:1:2",
                              type: "",
                              value: "4"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1494:4:2",
                              type: "",
                              value: "0x22"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "1484:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1484:15:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1484:15:2"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1515:1:2",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1518:4:2",
                              type: "",
                              value: "0x24"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "1508:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1508:15:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1508:15:2"
                      }
                    ]
                  },
                  name: "panic_error_0x22",
                  nodeType: "YulFunctionDefinition",
                  src: "1349:180:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1586:269:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "1596:22:2",
                        value: {
                          arguments: [
                            {
                              name: "data",
                              nodeType: "YulIdentifier",
                              src: "1610:4:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1616:1:2",
                              type: "",
                              value: "2"
                            }
                          ],
                          functionName: {
                            name: "div",
                            nodeType: "YulIdentifier",
                            src: "1606:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1606:12:2"
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "1596:6:2"
                          }
                        ]
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "1627:38:2",
                        value: {
                          arguments: [
                            {
                              name: "data",
                              nodeType: "YulIdentifier",
                              src: "1657:4:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1663:1:2",
                              type: "",
                              value: "1"
                            }
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "1653:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1653:12:2"
                        },
                        variables: [
                          {
                            name: "outOfPlaceEncoding",
                            nodeType: "YulTypedName",
                            src: "1631:18:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "1704:51:2",
                          statements: [
                            {
                              nodeType: "YulAssignment",
                              src: "1718:27:2",
                              value: {
                                arguments: [
                                  {
                                    name: "length",
                                    nodeType: "YulIdentifier",
                                    src: "1732:6:2"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "1740:4:2",
                                    type: "",
                                    value: "0x7f"
                                  }
                                ],
                                functionName: {
                                  name: "and",
                                  nodeType: "YulIdentifier",
                                  src: "1728:3:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "1728:17:2"
                              },
                              variableNames: [
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "1718:6:2"
                                }
                              ]
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "outOfPlaceEncoding",
                              nodeType: "YulIdentifier",
                              src: "1684:18:2"
                            }
                          ],
                          functionName: {
                            name: "iszero",
                            nodeType: "YulIdentifier",
                            src: "1677:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1677:26:2"
                        },
                        nodeType: "YulIf",
                        src: "1674:81:2"
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "1807:42:2",
                          statements: [
                            {
                              expression: {
                                arguments: [],
                                functionName: {
                                  name: "panic_error_0x22",
                                  nodeType: "YulIdentifier",
                                  src: "1821:16:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "1821:18:2"
                              },
                              nodeType: "YulExpressionStatement",
                              src: "1821:18:2"
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "outOfPlaceEncoding",
                              nodeType: "YulIdentifier",
                              src: "1771:18:2"
                            },
                            {
                              arguments: [
                                {
                                  name: "length",
                                  nodeType: "YulIdentifier",
                                  src: "1794:6:2"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1802:2:2",
                                  type: "",
                                  value: "32"
                                }
                              ],
                              functionName: {
                                name: "lt",
                                nodeType: "YulIdentifier",
                                src: "1791:2:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1791:14:2"
                            }
                          ],
                          functionName: {
                            name: "eq",
                            nodeType: "YulIdentifier",
                            src: "1768:2:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1768:38:2"
                        },
                        nodeType: "YulIf",
                        src: "1765:84:2"
                      }
                    ]
                  },
                  name: "extract_byte_array_length",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "data",
                      nodeType: "YulTypedName",
                      src: "1570:4:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "1579:6:2",
                      type: ""
                    }
                  ],
                  src: "1535:320:2"
                }
              ]
            },
            contents:
              "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n}\n",
            id: 2,
            language: "Yul",
            name: "#utility.yul"
          }
        ],
        compiler: {
          name: "solc",
          version: "0.8.16+commit.07a7930e.Emscripten.clang"
        }
      },
      {
        contractName: "SimpleStorage",
        abi: [
          {
            inputs: [],
            name: "read",
            outputs: [
              {
                internalType: "uint256",
                name: "",
                type: "uint256"
              }
            ],
            stateMutability: "view",
            type: "function"
          },
          {
            inputs: [
              {
                internalType: "uint256",
                name: "newValue",
                type: "uint256"
              }
            ],
            name: "write",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
          }
        ],
        metadata:
          '{"compiler":{"version":"0.8.16+commit.07a7930e"},"language":"Solidity","output":{"abi":[{"inputs":[],"name":"read","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"write","outputs":[],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/SimpleStorage.sol":"SimpleStorage"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/SimpleStorage.sol":{"keccak256":"0x13e8d9b325f86ac1007a738ded988faca89d95e2e855e38079dc6f00eea1d02a","license":"MIT","urls":["bzz-raw://bcf8902e17845e064ae817c3cc7afeef14bb749e7dfcd6b25003af832d3c670f","dweb:/ipfs/QmaknJEERLxRRLFLdg752XJKXZMnSWFuMEvZ85Un8UeoL5"]}},"version":1}',
        devdoc: {
          kind: "dev",
          methods: {},
          version: 1
        },
        userdoc: {
          kind: "user",
          methods: {},
          version: 1
        },
        sourcePath:
          "/home/cliff/box/consensys/truffle-test-project/contracts/SimpleStorage.sol",
        source:
          "// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.9.0;\n\ncontract SimpleStorage {\n  uint256 value;\n\n  function read() public view returns (uint256) {\n    return value;\n  }\n\n  function write(uint256 newValue) public {\n    value = newValue;\n  }\n}\n",
        sourceMap: "66:187:1:-:0;;;;;;;;;;;;;;;;;;;",
        deployedSourceMap:
          "66:187:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;184:67;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;111:69;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;184:67;238:8;230:5;:16;;;;184:67;:::o;111:69::-;148:7;170:5;;163:12;;111:69;:::o;88:117:2:-;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:118::-;1112:24;1130:5;1112:24;:::i;:::-;1107:3;1100:37;1025:118;;:::o;1149:222::-;1242:4;1280:2;1269:9;1265:18;1257:26;;1293:71;1361:1;1350:9;1346:17;1337:6;1293:71;:::i;:::-;1149:222;;;;:::o",
        ast: {
          absolutePath: "project:/contracts/SimpleStorage.sol",
          exportedSymbols: {
            SimpleStorage: [28]
          },
          id: 29,
          license: "MIT",
          nodeType: "SourceUnit",
          nodes: [
            {
              id: 7,
              literals: ["solidity", ">=", "0.4", ".22", "<", "0.9", ".0"],
              nodeType: "PragmaDirective",
              src: "32:32:1"
            },
            {
              abstract: false,
              baseContracts: [],
              canonicalName: "SimpleStorage",
              contractDependencies: [],
              contractKind: "contract",
              fullyImplemented: true,
              id: 28,
              linearizedBaseContracts: [28],
              name: "SimpleStorage",
              nameLocation: "75:13:1",
              nodeType: "ContractDefinition",
              nodes: [
                {
                  constant: false,
                  id: 9,
                  mutability: "mutable",
                  name: "value",
                  nameLocation: "101:5:1",
                  nodeType: "VariableDeclaration",
                  scope: 28,
                  src: "93:13:1",
                  stateVariable: true,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 8,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "93:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  body: {
                    id: 16,
                    nodeType: "Block",
                    src: "157:23:1",
                    statements: [
                      {
                        expression: {
                          id: 14,
                          name: "value",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 9,
                          src: "170:5:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        functionReturnParameters: 13,
                        id: 15,
                        nodeType: "Return",
                        src: "163:12:1"
                      }
                    ]
                  },
                  functionSelector: "57de26a4",
                  id: 17,
                  implemented: true,
                  kind: "function",
                  modifiers: [],
                  name: "read",
                  nameLocation: "120:4:1",
                  nodeType: "FunctionDefinition",
                  parameters: {
                    id: 10,
                    nodeType: "ParameterList",
                    parameters: [],
                    src: "124:2:1"
                  },
                  returnParameters: {
                    id: 13,
                    nodeType: "ParameterList",
                    parameters: [
                      {
                        constant: false,
                        id: 12,
                        mutability: "mutable",
                        name: "",
                        nameLocation: "-1:-1:-1",
                        nodeType: "VariableDeclaration",
                        scope: 17,
                        src: "148:7:1",
                        stateVariable: false,
                        storageLocation: "default",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        },
                        typeName: {
                          id: 11,
                          name: "uint256",
                          nodeType: "ElementaryTypeName",
                          src: "148:7:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        visibility: "internal"
                      }
                    ],
                    src: "147:9:1"
                  },
                  scope: 28,
                  src: "111:69:1",
                  stateMutability: "view",
                  virtual: false,
                  visibility: "public"
                },
                {
                  body: {
                    id: 26,
                    nodeType: "Block",
                    src: "224:27:1",
                    statements: [
                      {
                        expression: {
                          id: 24,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftHandSide: {
                            id: 22,
                            name: "value",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 9,
                            src: "230:5:1",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          nodeType: "Assignment",
                          operator: "=",
                          rightHandSide: {
                            id: 23,
                            name: "newValue",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 19,
                            src: "238:8:1",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          src: "230:16:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        id: 25,
                        nodeType: "ExpressionStatement",
                        src: "230:16:1"
                      }
                    ]
                  },
                  functionSelector: "2f048afa",
                  id: 27,
                  implemented: true,
                  kind: "function",
                  modifiers: [],
                  name: "write",
                  nameLocation: "193:5:1",
                  nodeType: "FunctionDefinition",
                  parameters: {
                    id: 20,
                    nodeType: "ParameterList",
                    parameters: [
                      {
                        constant: false,
                        id: 19,
                        mutability: "mutable",
                        name: "newValue",
                        nameLocation: "207:8:1",
                        nodeType: "VariableDeclaration",
                        scope: 27,
                        src: "199:16:1",
                        stateVariable: false,
                        storageLocation: "default",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        },
                        typeName: {
                          id: 18,
                          name: "uint256",
                          nodeType: "ElementaryTypeName",
                          src: "199:7:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        visibility: "internal"
                      }
                    ],
                    src: "198:18:1"
                  },
                  returnParameters: {
                    id: 21,
                    nodeType: "ParameterList",
                    parameters: [],
                    src: "224:0:1"
                  },
                  scope: 28,
                  src: "184:67:1",
                  stateMutability: "nonpayable",
                  virtual: false,
                  visibility: "public"
                }
              ],
              scope: 29,
              src: "66:187:1",
              usedErrors: []
            }
          ],
          src: "32:222:1"
        },
        bytecode: {
          linkReferences: [],
          bytes:
            "608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632f048afa1461003b57806357de26a414610057575b600080fd5b610055600480360381019061005091906100c3565b610075565b005b61005f61007f565b60405161006c91906100ff565b60405180910390f35b8060008190555050565b60008054905090565b600080fd5b6000819050919050565b6100a08161008d565b81146100ab57600080fd5b50565b6000813590506100bd81610097565b92915050565b6000602082840312156100d9576100d8610088565b5b60006100e7848285016100ae565b91505092915050565b6100f98161008d565b82525050565b600060208201905061011460008301846100f0565b9291505056fea2646970667358221220095edd154cf5ed86e28936fc93516deb4008a664c968639be86f9767eb4c878c64736f6c63430008100033"
        },
        deployedBytecode: {
          linkReferences: [],
          bytes:
            "608060405234801561001057600080fd5b50600436106100365760003560e01c80632f048afa1461003b57806357de26a414610057575b600080fd5b610055600480360381019061005091906100c3565b610075565b005b61005f61007f565b60405161006c91906100ff565b60405180910390f35b8060008190555050565b60008054905090565b600080fd5b6000819050919050565b6100a08161008d565b81146100ab57600080fd5b50565b6000813590506100bd81610097565b92915050565b6000602082840312156100d9576100d8610088565b5b60006100e7848285016100ae565b91505092915050565b6100f98161008d565b82525050565b600060208201905061011460008301846100f0565b9291505056fea2646970667358221220095edd154cf5ed86e28936fc93516deb4008a664c968639be86f9767eb4c878c64736f6c63430008100033"
        },
        immutableReferences: {},
        generatedSources: [],
        deployedGeneratedSources: [
          {
            ast: {
              nodeType: "YulBlock",
              src: "0:1374:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "47:35:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "57:19:2",
                        value: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "73:2:2",
                              type: "",
                              value: "64"
                            }
                          ],
                          functionName: {
                            name: "mload",
                            nodeType: "YulIdentifier",
                            src: "67:5:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "67:9:2"
                        },
                        variableNames: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "57:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "allocate_unbounded",
                  nodeType: "YulFunctionDefinition",
                  returnVariables: [
                    {
                      name: "memPtr",
                      nodeType: "YulTypedName",
                      src: "40:6:2",
                      type: ""
                    }
                  ],
                  src: "7:75:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "177:28:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "194:1:2",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "197:1:2",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "187:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "187:12:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "187:12:2"
                      }
                    ]
                  },
                  name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                  nodeType: "YulFunctionDefinition",
                  src: "88:117:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "300:28:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "317:1:2",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "320:1:2",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "310:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "310:12:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "310:12:2"
                      }
                    ]
                  },
                  name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                  nodeType: "YulFunctionDefinition",
                  src: "211:117:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "379:32:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "389:16:2",
                        value: {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "400:5:2"
                        },
                        variableNames: [
                          {
                            name: "cleaned",
                            nodeType: "YulIdentifier",
                            src: "389:7:2"
                          }
                        ]
                      }
                    ]
                  },
                  name: "cleanup_t_uint256",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "361:5:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "cleaned",
                      nodeType: "YulTypedName",
                      src: "371:7:2",
                      type: ""
                    }
                  ],
                  src: "334:77:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "460:79:2",
                    statements: [
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "517:16:2",
                          statements: [
                            {
                              expression: {
                                arguments: [
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "526:1:2",
                                    type: "",
                                    value: "0"
                                  },
                                  {
                                    kind: "number",
                                    nodeType: "YulLiteral",
                                    src: "529:1:2",
                                    type: "",
                                    value: "0"
                                  }
                                ],
                                functionName: {
                                  name: "revert",
                                  nodeType: "YulIdentifier",
                                  src: "519:6:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "519:12:2"
                              },
                              nodeType: "YulExpressionStatement",
                              src: "519:12:2"
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "483:5:2"
                                },
                                {
                                  arguments: [
                                    {
                                      name: "value",
                                      nodeType: "YulIdentifier",
                                      src: "508:5:2"
                                    }
                                  ],
                                  functionName: {
                                    name: "cleanup_t_uint256",
                                    nodeType: "YulIdentifier",
                                    src: "490:17:2"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "490:24:2"
                                }
                              ],
                              functionName: {
                                name: "eq",
                                nodeType: "YulIdentifier",
                                src: "480:2:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "480:35:2"
                            }
                          ],
                          functionName: {
                            name: "iszero",
                            nodeType: "YulIdentifier",
                            src: "473:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "473:43:2"
                        },
                        nodeType: "YulIf",
                        src: "470:63:2"
                      }
                    ]
                  },
                  name: "validator_revert_t_uint256",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "453:5:2",
                      type: ""
                    }
                  ],
                  src: "417:122:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "597:87:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "607:29:2",
                        value: {
                          arguments: [
                            {
                              name: "offset",
                              nodeType: "YulIdentifier",
                              src: "629:6:2"
                            }
                          ],
                          functionName: {
                            name: "calldataload",
                            nodeType: "YulIdentifier",
                            src: "616:12:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "616:20:2"
                        },
                        variableNames: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "607:5:2"
                          }
                        ]
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "672:5:2"
                            }
                          ],
                          functionName: {
                            name: "validator_revert_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "645:26:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "645:33:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "645:33:2"
                      }
                    ]
                  },
                  name: "abi_decode_t_uint256",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "offset",
                      nodeType: "YulTypedName",
                      src: "575:6:2",
                      type: ""
                    },
                    {
                      name: "end",
                      nodeType: "YulTypedName",
                      src: "583:3:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "591:5:2",
                      type: ""
                    }
                  ],
                  src: "545:139:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "756:263:2",
                    statements: [
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "802:83:2",
                          statements: [
                            {
                              expression: {
                                arguments: [],
                                functionName: {
                                  name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  nodeType: "YulIdentifier",
                                  src: "804:77:2"
                                },
                                nodeType: "YulFunctionCall",
                                src: "804:79:2"
                              },
                              nodeType: "YulExpressionStatement",
                              src: "804:79:2"
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dataEnd",
                                  nodeType: "YulIdentifier",
                                  src: "777:7:2"
                                },
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "786:9:2"
                                }
                              ],
                              functionName: {
                                name: "sub",
                                nodeType: "YulIdentifier",
                                src: "773:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "773:23:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "798:2:2",
                              type: "",
                              value: "32"
                            }
                          ],
                          functionName: {
                            name: "slt",
                            nodeType: "YulIdentifier",
                            src: "769:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "769:32:2"
                        },
                        nodeType: "YulIf",
                        src: "766:119:2"
                      },
                      {
                        nodeType: "YulBlock",
                        src: "895:117:2",
                        statements: [
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "910:15:2",
                            value: {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "924:1:2",
                              type: "",
                              value: "0"
                            },
                            variables: [
                              {
                                name: "offset",
                                nodeType: "YulTypedName",
                                src: "914:6:2",
                                type: ""
                              }
                            ]
                          },
                          {
                            nodeType: "YulAssignment",
                            src: "939:63:2",
                            value: {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "headStart",
                                      nodeType: "YulIdentifier",
                                      src: "974:9:2"
                                    },
                                    {
                                      name: "offset",
                                      nodeType: "YulIdentifier",
                                      src: "985:6:2"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "970:3:2"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "970:22:2"
                                },
                                {
                                  name: "dataEnd",
                                  nodeType: "YulIdentifier",
                                  src: "994:7:2"
                                }
                              ],
                              functionName: {
                                name: "abi_decode_t_uint256",
                                nodeType: "YulIdentifier",
                                src: "949:20:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "949:53:2"
                            },
                            variableNames: [
                              {
                                name: "value0",
                                nodeType: "YulIdentifier",
                                src: "939:6:2"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  name: "abi_decode_tuple_t_uint256",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "headStart",
                      nodeType: "YulTypedName",
                      src: "726:9:2",
                      type: ""
                    },
                    {
                      name: "dataEnd",
                      nodeType: "YulTypedName",
                      src: "737:7:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "value0",
                      nodeType: "YulTypedName",
                      src: "749:6:2",
                      type: ""
                    }
                  ],
                  src: "690:329:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1090:53:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              name: "pos",
                              nodeType: "YulIdentifier",
                              src: "1107:3:2"
                            },
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "1130:5:2"
                                }
                              ],
                              functionName: {
                                name: "cleanup_t_uint256",
                                nodeType: "YulIdentifier",
                                src: "1112:17:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1112:24:2"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "1100:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1100:37:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1100:37:2"
                      }
                    ]
                  },
                  name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "value",
                      nodeType: "YulTypedName",
                      src: "1078:5:2",
                      type: ""
                    },
                    {
                      name: "pos",
                      nodeType: "YulTypedName",
                      src: "1085:3:2",
                      type: ""
                    }
                  ],
                  src: "1025:118:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1247:124:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "1257:26:2",
                        value: {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "1269:9:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1280:2:2",
                              type: "",
                              value: "32"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "1265:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1265:18:2"
                        },
                        variableNames: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "1257:4:2"
                          }
                        ]
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "value0",
                              nodeType: "YulIdentifier",
                              src: "1337:6:2"
                            },
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "1350:9:2"
                                },
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "1361:1:2",
                                  type: "",
                                  value: "0"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "1346:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "1346:17:2"
                            }
                          ],
                          functionName: {
                            name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                            nodeType: "YulIdentifier",
                            src: "1293:43:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1293:71:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1293:71:2"
                      }
                    ]
                  },
                  name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                  nodeType: "YulFunctionDefinition",
                  parameters: [
                    {
                      name: "headStart",
                      nodeType: "YulTypedName",
                      src: "1219:9:2",
                      type: ""
                    },
                    {
                      name: "value0",
                      nodeType: "YulTypedName",
                      src: "1231:6:2",
                      type: ""
                    }
                  ],
                  returnVariables: [
                    {
                      name: "tail",
                      nodeType: "YulTypedName",
                      src: "1242:4:2",
                      type: ""
                    }
                  ],
                  src: "1149:222:2"
                }
              ]
            },
            contents:
              "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n}\n",
            id: 2,
            language: "Yul",
            name: "#utility.yul"
          }
        ],
        compiler: {
          name: "solc",
          version: "0.8.16+commit.07a7930e.Emscripten.clang"
        }
      }
    ],
    sources: [
      {
        sourcePath:
          "/home/cliff/box/consensys/truffle-test-project/contracts/HelloWorld.sol",
        contents:
          '// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.9.0;\n\ncontract HelloWorld {\n  string public greeting = "Hello World!";\n}\n',
        ast: {
          absolutePath: "project:/contracts/HelloWorld.sol",
          exportedSymbols: {
            HelloWorld: [5]
          },
          id: 6,
          license: "MIT",
          nodeType: "SourceUnit",
          nodes: [
            {
              id: 1,
              literals: ["solidity", ">=", "0.4", ".22", "<", "0.9", ".0"],
              nodeType: "PragmaDirective",
              src: "32:32:0"
            },
            {
              abstract: false,
              baseContracts: [],
              canonicalName: "HelloWorld",
              contractDependencies: [],
              contractKind: "contract",
              fullyImplemented: true,
              id: 5,
              linearizedBaseContracts: [5],
              name: "HelloWorld",
              nameLocation: "75:10:0",
              nodeType: "ContractDefinition",
              nodes: [
                {
                  constant: false,
                  functionSelector: "ef690cc0",
                  id: 4,
                  mutability: "mutable",
                  name: "greeting",
                  nameLocation: "104:8:0",
                  nodeType: "VariableDeclaration",
                  scope: 5,
                  src: "90:39:0",
                  stateVariable: true,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage",
                    typeString: "string"
                  },
                  typeName: {
                    id: 2,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "90:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  value: {
                    hexValue: "48656c6c6f20576f726c6421",
                    id: 3,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "string",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "115:14:0",
                    typeDescriptions: {
                      typeIdentifier:
                        "t_stringliteral_3ea2f1d0abf3fc66cf29eebb70cbd4e7fe762ef8a09bcc06c8edf641230afec0",
                      typeString: 'literal_string "Hello World!"'
                    },
                    value: "Hello World!"
                  },
                  visibility: "public"
                }
              ],
              scope: 6,
              src: "66:66:0",
              usedErrors: []
            }
          ],
          src: "32:101:0"
        },
        language: "Solidity"
      },
      {
        sourcePath:
          "/home/cliff/box/consensys/truffle-test-project/contracts/SimpleStorage.sol",
        contents:
          "// SPDX-License-Identifier: MIT\npragma solidity >=0.4.22 <0.9.0;\n\ncontract SimpleStorage {\n  uint256 value;\n\n  function read() public view returns (uint256) {\n    return value;\n  }\n\n  function write(uint256 newValue) public {\n    value = newValue;\n  }\n}\n",
        ast: {
          absolutePath: "project:/contracts/SimpleStorage.sol",
          exportedSymbols: {
            SimpleStorage: [28]
          },
          id: 29,
          license: "MIT",
          nodeType: "SourceUnit",
          nodes: [
            {
              id: 7,
              literals: ["solidity", ">=", "0.4", ".22", "<", "0.9", ".0"],
              nodeType: "PragmaDirective",
              src: "32:32:1"
            },
            {
              abstract: false,
              baseContracts: [],
              canonicalName: "SimpleStorage",
              contractDependencies: [],
              contractKind: "contract",
              fullyImplemented: true,
              id: 28,
              linearizedBaseContracts: [28],
              name: "SimpleStorage",
              nameLocation: "75:13:1",
              nodeType: "ContractDefinition",
              nodes: [
                {
                  constant: false,
                  id: 9,
                  mutability: "mutable",
                  name: "value",
                  nameLocation: "101:5:1",
                  nodeType: "VariableDeclaration",
                  scope: 28,
                  src: "93:13:1",
                  stateVariable: true,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 8,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "93:7:1",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                },
                {
                  body: {
                    id: 16,
                    nodeType: "Block",
                    src: "157:23:1",
                    statements: [
                      {
                        expression: {
                          id: 14,
                          name: "value",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 9,
                          src: "170:5:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        functionReturnParameters: 13,
                        id: 15,
                        nodeType: "Return",
                        src: "163:12:1"
                      }
                    ]
                  },
                  functionSelector: "57de26a4",
                  id: 17,
                  implemented: true,
                  kind: "function",
                  modifiers: [],
                  name: "read",
                  nameLocation: "120:4:1",
                  nodeType: "FunctionDefinition",
                  parameters: {
                    id: 10,
                    nodeType: "ParameterList",
                    parameters: [],
                    src: "124:2:1"
                  },
                  returnParameters: {
                    id: 13,
                    nodeType: "ParameterList",
                    parameters: [
                      {
                        constant: false,
                        id: 12,
                        mutability: "mutable",
                        name: "",
                        nameLocation: "-1:-1:-1",
                        nodeType: "VariableDeclaration",
                        scope: 17,
                        src: "148:7:1",
                        stateVariable: false,
                        storageLocation: "default",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        },
                        typeName: {
                          id: 11,
                          name: "uint256",
                          nodeType: "ElementaryTypeName",
                          src: "148:7:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        visibility: "internal"
                      }
                    ],
                    src: "147:9:1"
                  },
                  scope: 28,
                  src: "111:69:1",
                  stateMutability: "view",
                  virtual: false,
                  visibility: "public"
                },
                {
                  body: {
                    id: 26,
                    nodeType: "Block",
                    src: "224:27:1",
                    statements: [
                      {
                        expression: {
                          id: 24,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftHandSide: {
                            id: 22,
                            name: "value",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 9,
                            src: "230:5:1",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          nodeType: "Assignment",
                          operator: "=",
                          rightHandSide: {
                            id: 23,
                            name: "newValue",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 19,
                            src: "238:8:1",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256"
                            }
                          },
                          src: "230:16:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        id: 25,
                        nodeType: "ExpressionStatement",
                        src: "230:16:1"
                      }
                    ]
                  },
                  functionSelector: "2f048afa",
                  id: 27,
                  implemented: true,
                  kind: "function",
                  modifiers: [],
                  name: "write",
                  nameLocation: "193:5:1",
                  nodeType: "FunctionDefinition",
                  parameters: {
                    id: 20,
                    nodeType: "ParameterList",
                    parameters: [
                      {
                        constant: false,
                        id: 19,
                        mutability: "mutable",
                        name: "newValue",
                        nameLocation: "207:8:1",
                        nodeType: "VariableDeclaration",
                        scope: 27,
                        src: "199:16:1",
                        stateVariable: false,
                        storageLocation: "default",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        },
                        typeName: {
                          id: 18,
                          name: "uint256",
                          nodeType: "ElementaryTypeName",
                          src: "199:7:1",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        visibility: "internal"
                      }
                    ],
                    src: "198:18:1"
                  },
                  returnParameters: {
                    id: 21,
                    nodeType: "ParameterList",
                    parameters: [],
                    src: "224:0:1"
                  },
                  scope: 28,
                  src: "184:67:1",
                  stateMutability: "nonpayable",
                  virtual: false,
                  visibility: "public"
                }
              ],
              scope: 29,
              src: "66:187:1",
              usedErrors: []
            }
          ],
          src: "32:222:1"
        },
        language: "Solidity"
      }
    ],
    compiler: {
      name: "solc",
      version: "0.8.16+commit.07a7930e.Emscripten.clang"
    }
  }
];
