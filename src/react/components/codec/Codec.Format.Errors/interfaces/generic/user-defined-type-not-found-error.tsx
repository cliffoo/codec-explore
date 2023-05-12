import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "UserDefinedTypeNotFoundError";

export const { UserDefinedTypeNotFoundError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.UserDefinedTypeNotFoundError) => (
      <span>{data.kind}</span>
    )
  )
};
