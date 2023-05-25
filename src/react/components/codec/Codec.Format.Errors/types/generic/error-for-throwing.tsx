import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isUserDefinedTypeNotFoundError } from "@/utils/type-guards/decoder-error/user-defined-type-not-found-error";
import { UserDefinedTypeNotFoundError } from "@/react/components/codec/Codec.Format.Errors/interfaces/generic/user-defined-type-not-found-error";
import { ReadError } from "@/react/components/codec/Codec.Format.Errors/types/generic/read-error";

export const { ErrorForThrowing } = createCodecComponent(
  "ErrorForThrowing",
  (data: Format.Errors.ErrorForThrowing) =>
    isUserDefinedTypeNotFoundError(data) ? (
      <UserDefinedTypeNotFoundError data={data} />
    ) : (
      <ReadError data={data} />
    )
);
