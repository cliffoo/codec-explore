import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { DynamicDataImplementationError } from "@/react/components/codec/Format.Errors/types/generic/dynamic-data-implementation-error";

export const { TupleError } = createCodecComponent(
  "TupleError",
  (data: Format.Errors.TupleError) => (
    <DynamicDataImplementationError data={data} />
  )
);
