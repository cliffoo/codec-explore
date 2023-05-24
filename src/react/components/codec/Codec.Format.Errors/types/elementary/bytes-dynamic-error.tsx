import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { DynamicDataImplementationError } from "@/react/components/codec/Codec.Format.Errors/types/generic/dynamic-data-implementation-error";

const displayName = "BytesDynamicError";

export const { BytesDynamicError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.BytesDynamicError) => (
      <DynamicDataImplementationError data={data} />
    )
  )
};
