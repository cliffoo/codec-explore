export const isFunctionInternalValueInfoUnknown = (
  data: Format.Values.FunctionInternalValueInfo
): data is Format.Values.FunctionInternalValueInfoUnknown =>
  data.kind === "unknown";
