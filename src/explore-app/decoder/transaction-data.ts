import type { Transaction } from "@truffle/decoder";
import { fallbackTransactions } from "./transaction-data.fallback";

const overrideTransactions: { [label: string]: Transaction } = {
  // Data to override fallback data
};

export const transactions =
  Object.keys(overrideTransactions).length === 0
    ? fallbackTransactions
    : overrideTransactions;
