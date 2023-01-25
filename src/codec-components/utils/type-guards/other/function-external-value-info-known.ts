export const isFunctionExternalValueInfoKnown = (
  data: Format.Values.FunctionExternalValueInfo
): data is Format.Values.FunctionExternalValueInfoKnown =>
  data.kind === "known";
