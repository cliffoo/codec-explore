import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { WrappedError } from "@/components/Format/Errors/interfaces/user-defined-elementary/wrapped-error";

export const UserDefinedValueTypeError = createPolymorphicComponent(
  (data: Format.Errors.UserDefinedValueTypeError) => (
    <WrappedError data={data} />
  )
);
