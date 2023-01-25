import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { FixedPaddingError } from "@/components/Format/Errors/interfaces/elementary/fixed-padding-error";

export const FixedError = createPolymorphicComponent(
  (data: Format.Errors.FixedError) => <FixedPaddingError data={data} />
);
