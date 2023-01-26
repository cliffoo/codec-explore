import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { IntPaddingError } from "@/components/Format/Errors/interfaces/elementary/int-padding-error";

const displayName = "IntError";

export const { IntError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.IntError) => <IntPaddingError data={data} />
  )
};
