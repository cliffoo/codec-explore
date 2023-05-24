import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { DynamicDataImplementationError } from "@/react/components/codec/Codec.Format.Errors/types/generic/dynamic-data-implementation-error";

const displayName = "TupleError";

export const { TupleError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.TupleError) => (
      <DynamicDataImplementationError data={data} />
    )
  )
};
