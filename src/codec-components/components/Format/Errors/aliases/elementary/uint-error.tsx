import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { UintPaddingError } from "@/components/Format/Errors/interfaces/elementary/uint-padding-error";

export const UintError = createPolymorphicComponent(
  (data: Format.Errors.UintError) => <UintPaddingError data={data} />
);
