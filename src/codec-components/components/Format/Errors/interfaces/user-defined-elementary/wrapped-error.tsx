import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { BuiltInValueErrorResult } from "@/components/Format/Errors/aliases/elementary/built-in-value-error-result";

const displayName = "WrappedError";

export const { WrappedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.WrappedError) => (
      <BuiltInValueErrorResult data={error} />
    )
  )
};
