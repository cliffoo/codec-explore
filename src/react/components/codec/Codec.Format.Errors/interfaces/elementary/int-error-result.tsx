import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isIntError } from "@/utils/type-guards/decoder-error/int-error";
import { IntError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/int-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

export const { IntErrorResult } = createCodecComponent(
  "IntErrorResult",
  ({ error }: Format.Errors.IntErrorResult) =>
    isIntError(error) ? (
      <IntError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
