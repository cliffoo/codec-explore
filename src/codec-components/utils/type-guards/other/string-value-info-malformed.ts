export const isStringValueInfoMalformed = (
  data: Format.Values.StringValueInfo
): data is Format.Values.StringValueInfoMalformed => data.kind === "malformed";
