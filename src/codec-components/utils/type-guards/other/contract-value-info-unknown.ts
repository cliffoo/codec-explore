export const isContractValueInfoUnknown = (
  data: Format.Values.ContractValueInfo
): data is Format.Values.ContractValueInfoUnknown => data.kind === "unknown";
