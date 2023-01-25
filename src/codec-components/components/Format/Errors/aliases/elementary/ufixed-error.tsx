import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { UfixedPaddingError } from "@/components/Format/Errors/interfaces/elementary/ufixed-padding-error";

export const UfixedError = createPolymorphicComponent(
  (data: Format.Errors.UfixedError) => <UfixedPaddingError data={data} />
);
