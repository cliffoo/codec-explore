export const isFunctionExternalValueInfoUnknown = (
  data: Format.Values.FunctionExternalValueInfo
): data is Format.Values.FunctionExternalValueInfoUnknown =>
  data.kind === "unknown";
