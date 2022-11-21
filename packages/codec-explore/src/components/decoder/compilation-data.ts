import type { Compilation } from "@truffle/compile-common";
import { fallbackCompilations } from "./compilation-data.fallback";

const overrideCompilations: Compilation[] = [
  // Data to override fallback data
];

export const compilations =
  overrideCompilations.length === 0
    ? fallbackCompilations
    : overrideCompilations;
