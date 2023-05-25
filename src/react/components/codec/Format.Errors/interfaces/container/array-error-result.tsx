import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isArrayError } from "@/utils/type-guards/decoder-error/array-error";
import { ArrayError } from "@/react/components/codec/Format.Errors/types/container/array-error";
import { GenericError } from "@/react/components/codec/Format.Errors/types/generic/generic-error";

export const { ArrayErrorResult } = createCodecComponent(
  "ArrayErrorResult",
  ({ error }: Format.Errors.ArrayErrorResult) =>
    isArrayError(error) ? (
      <ArrayError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
