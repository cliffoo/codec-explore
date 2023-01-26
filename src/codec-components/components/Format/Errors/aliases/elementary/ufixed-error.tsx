import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { UfixedPaddingError } from "@/components/Format/Errors/interfaces/elementary/ufixed-padding-error";

const displayName = "UfixedError";

export const { UfixedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.UfixedError) => <UfixedPaddingError data={data} />
  )
};
