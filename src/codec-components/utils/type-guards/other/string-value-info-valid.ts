export const isStringValueInfoValid = (
  data: Format.Values.StringValueInfo
): data is Format.Values.StringValueInfoValid => data.kind === "valid";
