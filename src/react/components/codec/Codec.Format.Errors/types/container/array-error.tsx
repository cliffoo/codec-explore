import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { DynamicDataImplementationError } from "@/react/components/codec/Codec.Format.Errors/types/generic/dynamic-data-implementation-error";

const displayName = "ArrayError";

export const { ArrayError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.ArrayError) => (
      <DynamicDataImplementationError data={data} />
    )
  )
};
