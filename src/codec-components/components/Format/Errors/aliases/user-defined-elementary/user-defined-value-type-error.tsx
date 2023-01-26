import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { WrappedError } from "@/components/Format/Errors/interfaces/user-defined-elementary/wrapped-error";

const displayName = "UserDefinedValueTypeError";

export const { UserDefinedValueTypeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.UserDefinedValueTypeError) => (
      <WrappedError data={data} />
    )
  )
};
