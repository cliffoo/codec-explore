import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isOverlongArraysAndStringsNotImplementedError } from "@/utils/type-guards/decoder-error/overlong-arrays-and-strings-not-implemented-error";
import { OverlongArraysAndStringsNotImplementedError } from "@/components/Format/Errors/interfaces/generic/overlong-arrays-and-strings-not-implemented-error";
import { OverlargePointersNotImplementedError } from "@/components/Format/Errors/interfaces/generic/overlarge-pointers-not-implemented-error";

const displayName = "DynamicDataImplementationError";

export const { DynamicDataImplementationError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.DynamicDataImplementationError) =>
      isOverlongArraysAndStringsNotImplementedError(data) ? (
        <OverlongArraysAndStringsNotImplementedError data={data} />
      ) : (
        <OverlargePointersNotImplementedError data={data} />
      )
  )
};
