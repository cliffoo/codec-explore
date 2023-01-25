import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const OverlongArraysAndStringsNotImplementedError =
  createPolymorphicComponent(
    (data: Format.Errors.OverlongArraysAndStringsNotImplementedError) =>
      // TODO
      data.lengthAsBN.toString()
  );
