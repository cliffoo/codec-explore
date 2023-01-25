export const isBytesLocation = (
  data: string
): data is Format.Errors.BytesLocation =>
  data === "memory" ||
  data === "calldata" ||
  data === "eventdata" ||
  data === "returndata" ||
  data === "code";
