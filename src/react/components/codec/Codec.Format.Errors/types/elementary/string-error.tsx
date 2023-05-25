import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { DynamicDataImplementationError } from "@/react/components/codec/Codec.Format.Errors/types/generic/dynamic-data-implementation-error";

export const { StringError } = createCodecComponent(
  "StringError",
  (data: Format.Errors.StringError) => (
    <DynamicDataImplementationError data={data} />
  )
);
