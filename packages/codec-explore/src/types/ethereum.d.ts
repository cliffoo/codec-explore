import type { providers } from "ethers";

declare global {
  interface Window {
    ethereum?: providers.ExternalProvider;
  }
}
