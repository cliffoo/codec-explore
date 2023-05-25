import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isStringError } from "@/utils/type-guards/decoder-error/string-error";
import { StringError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/string-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

export const { StringErrorResult } = createCodecComponent(
  "StringErrorResult",
  ({ error }: Format.Errors.StringErrorResult) =>
    isStringError(error) ? (
      <StringError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
