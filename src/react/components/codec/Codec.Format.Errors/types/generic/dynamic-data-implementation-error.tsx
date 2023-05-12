import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isOverlongArraysAndStringsNotImplementedError } from "@/utils/type-guards/decoder-error/overlong-arrays-and-strings-not-implemented-error";
import { OverlongArraysAndStringsNotImplementedError } from "@/react/components/codec/Codec.Format.Errors/interfaces/generic/overlong-arrays-and-strings-not-implemented-error";
import { OverlargePointersNotImplementedError } from "@/react/components/codec/Codec.Format.Errors/interfaces/generic/overlarge-pointers-not-implemented-error";

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
