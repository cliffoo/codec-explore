import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { WrappedError } from "@/react/components/codec/Codec.Format.Errors/interfaces/user-defined-elementary/wrapped-error";

const displayName = "UserDefinedValueTypeError";

export const { UserDefinedValueTypeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.UserDefinedValueTypeError) => (
      <WrappedError data={data} />
    )
  )
};
