import { createContext, useContext, useState, useEffect } from "react";
import { forProject } from "@truffle/decoder";
import type { ProjectDecoder } from "@truffle/decoder";
import { fallbackCompilations } from "./compilation-data.fallback";
import { compilations } from "./compilation-data";

export const DecoderContext = createContext<{ decoder: ProjectDecoder | null }>(
  { decoder: null }
);

export function useDecoder() {
  const { decoder } = useContext(DecoderContext);
  return decoder;
}

export interface DecoderProviderProps {
  children: React.ReactNode;
}

export function DecoderProvider({
  children
}: DecoderProviderProps): JSX.Element {
  const [decoder, setDecoder] = useState<ProjectDecoder | null>(null);

  useEffect(() => {
    async function initDecoder() {
      const decoder_ = await forProject({
        projectInfo: {
          commonCompilations:
            compilations.length === 0 ? fallbackCompilations : compilations
        },
        provider: window.ethereum
      });

      setDecoder(decoder_);
    }

    initDecoder();
  }, []);

  return (
    <DecoderContext.Provider value={{ decoder }}>
      {children}
    </DecoderContext.Provider>
  );
}
