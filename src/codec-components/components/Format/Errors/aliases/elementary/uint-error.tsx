import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { UintPaddingError } from "@/components/Format/Errors/interfaces/elementary/uint-padding-error";

const displayName = "UintError";

export const { UintError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.UintError) => <UintPaddingError data={data} />
  )
};
