import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { BracketDepthProvider } from "@/react/contexts/internal/bracket-depth";
import { InjectedNodeProvider } from "@/react/contexts/internal/injected-node";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

interface OptionProps {
  children: React.ReactNode;
  name: string;
}
function Option({ children, name }: OptionProps) {
  return (
    <Code>
      <Code type="name">{name}</Code>
      <Code type="colon">:&nbsp;</Code>
      {children}
    </Code>
  );
}

export const { Options } = createCodecComponent(
  "Options",
  (optionsData: Codec.Options) => {
    const {
      accessList,
      data,
      from,
      gas,
      gasPrice,
      maxFeePerGas,
      maxPriorityFeePerGas,
      nonce,
      overwrite,
      privateFor,
      to,
      type,
      value
    } = optionsData;

    return (
      <Container
        prefix={<Code type="bracket">{"{"}</Code>}
        suffix={<Code type="bracket">{"}"}</Code>}
        empty={Object.keys(optionsData).length === 0}
      >
        <BracketDepthProvider>
          {/* TODO: Replace with <AccessList /> */}
          {accessList && (
            <Option name="accessList">
              <Container
                prefix={<Code type="bracket">[</Code>}
                suffix={<Code type="bracket">]</Code>}
                empty={accessList.length === 0}
              >
                {accessList.map((accessListForAddress, index) => (
                  <InjectedNodeProvider
                    reset={index === accessList.length - 1}
                    value={{
                      content: { suffix: <Code type="comma">,&nbsp;</Code> },
                      suffix: { suffix: <Code type="comma">,&nbsp;</Code> }
                    }}
                    key={index}
                  >
                    <Code type="address">{accessListForAddress.address}</Code>
                  </InjectedNodeProvider>
                ))}
              </Container>
            </Option>
          )}
          {data && (
            <Option name="data">
              <Code type="bytes">{data}</Code>
            </Option>
          )}
          {from && (
            <Option name="from">
              <Code type="address">{from}</Code>
            </Option>
          )}
          {gas && (
            <Option name="gas">
              <Code type="number">{gas.toString()}</Code>
            </Option>
          )}
          {gasPrice && (
            <Option name="gasPrice">
              <Code type="number">{gasPrice.toString()}</Code>
            </Option>
          )}
          {maxFeePerGas && (
            <Option name="maxFeePerGas">
              <Code type="number">{maxFeePerGas.toString()}</Code>
            </Option>
          )}
          {maxPriorityFeePerGas && (
            <Option name="maxPriorityFeePerGas">
              <Code type="number">{maxPriorityFeePerGas.toString()}</Code>
            </Option>
          )}
          {nonce && (
            <Option name="nonce">
              <Code type="number">{nonce.toString()}</Code>
            </Option>
          )}
          {overwrite && (
            <Option name="overwrite">
              <Code type="boolean">{overwrite.toString()}</Code>
            </Option>
          )}
          {privateFor && (
            <Container
              prefix={<Code type="bracket">[</Code>}
              suffix={<Code type="bracket">]</Code>}
              empty={privateFor.length === 0}
            >
              {privateFor.map((value, index) => (
                <InjectedNodeProvider
                  reset={index === privateFor.length - 1}
                  value={{
                    content: { suffix: <Code type="comma">,&nbsp;</Code> },
                    suffix: { suffix: <Code type="comma">,&nbsp;</Code> }
                  }}
                  key={index}
                >
                  <Code type="string">{value}</Code>
                </InjectedNodeProvider>
              ))}
            </Container>
          )}
          {to && (
            <Option name="to">
              <Code type="address">{to}</Code>
            </Option>
          )}
          {type && (
            <Option name="type">
              <Code type="bytes">{type}</Code>
            </Option>
          )}
          {value && (
            <Option name="value">
              <Code type="number">{value.toString()}</Code>
            </Option>
          )}
        </BracketDepthProvider>
      </Container>
    );
  }
);
