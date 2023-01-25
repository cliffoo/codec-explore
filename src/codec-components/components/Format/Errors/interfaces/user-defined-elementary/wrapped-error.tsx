import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { BuiltInValueErrorResult } from "@/components/Format/Errors/aliases/elementary/built-in-value-error-result";

export const WrappedError = createPolymorphicComponent(
  ({ error }: Format.Errors.WrappedError) => (
    <BuiltInValueErrorResult data={error} />
  )
);
