export const isContractValueInfoKnown = (
  data: Format.Values.ContractValueInfo
): data is Format.Values.ContractValueInfoKnown => data.kind === "known";
