import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "UserDefinedTypeNotFoundError";

export const { UserDefinedTypeNotFoundError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.UserDefinedTypeNotFoundError) => (
      <span>{data.kind}</span>
    )
  )
};
