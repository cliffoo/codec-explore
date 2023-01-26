import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { FixedPaddingError } from "@/components/Format/Errors/interfaces/elementary/fixed-padding-error";

const displayName = "FixedError";

export const { FixedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.FixedError) => <FixedPaddingError data={data} />
  )
};
