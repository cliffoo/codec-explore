import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "EnumNotFoundDecodingError";

export const { EnumNotFoundDecodingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.EnumNotFoundDecodingError) => (
      <Code>{data.rawAsBN.toString()}</Code>
    )
  )
};
