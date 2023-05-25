import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { UserDefinedTypeNotFoundError } = createCodecComponent(
  "UserDefinedTypeNotFoundError",
  // TODO
  (data: Format.Errors.UserDefinedTypeNotFoundError) => <span>{data.kind}</span>
);
