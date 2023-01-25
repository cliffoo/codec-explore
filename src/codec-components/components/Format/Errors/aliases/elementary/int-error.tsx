import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { IntPaddingError } from "@/components/Format/Errors/interfaces/elementary/int-padding-error";

export const IntError = createPolymorphicComponent(
  (data: Format.Errors.IntError) => <IntPaddingError data={data} />
);
