import { createContext, useContext, useState, useEffect } from "react";
import { forProject } from "@truffle/decoder";
import type { ProjectDecoder } from "@truffle/decoder";
import type { CalldataDecoding } from "@truffle/codec";
import { compilations } from "./compilation-data";
import { transactions } from "./transaction-data";

export const DecoderContext = createContext<{
  decoder: ProjectDecoder | null;
  decodings: Record<string, CalldataDecoding>;
}>({ decoder: null, decodings: {} });

export const useDecoder = () => useContext(DecoderContext).decoder;
export const useDecodings = () => useContext(DecoderContext).decodings;

export interface DecoderProviderProps {
  children: React.ReactNode;
}

export function DecoderProvider({
  children
}: DecoderProviderProps): JSX.Element {
  const [decoder, setDecoder] = useState<ProjectDecoder | null>(null);
  const [decodings, setDecodings] = useState<Record<string, CalldataDecoding>>(
    {}
  );

  useEffect(() => {
    async function init() {
      const decoder_ = await forProject({
        projectInfo: {
          commonCompilations: compilations
        },
        provider: window.ethereum
      });

      const decodings_: Record<string, CalldataDecoding> = {};
      for (const [label, transaction] of Object.entries(transactions)) {
        decodings_[label] = await decoder_.decodeTransaction(transaction);
      }

      setDecoder(decoder_);
      setDecodings(decodings_);
    }

    init();
  }, []);

  return (
    <DecoderContext.Provider value={{ decoder, decodings }}>
      {children}
    </DecoderContext.Provider>
  );
}
