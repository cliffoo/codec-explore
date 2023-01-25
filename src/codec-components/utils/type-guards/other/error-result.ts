export const isErrorResult = (
  data: Format.Values.Result
): data is Format.Errors.ErrorResult => data.kind === "error";
