export const isFunctionInternalValueInfoException = (
  data: Format.Values.FunctionInternalValueInfo
): data is Format.Values.FunctionInternalValueInfoException =>
  data.kind === "exception";
