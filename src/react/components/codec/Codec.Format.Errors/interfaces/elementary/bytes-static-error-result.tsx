import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isBytesStaticError } from "@/utils/type-guards/decoder-error/bytes-static-error";
import { BytesStaticError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/bytes-static-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

export const { BytesStaticErrorResult } = createCodecComponent(
  "BytesStaticErrorResult",
  ({ error }: Format.Errors.BytesStaticErrorResult) =>
    isBytesStaticError(error) ? (
      <BytesStaticError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
