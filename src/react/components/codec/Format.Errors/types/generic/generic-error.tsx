import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isUserDefinedTypeNotFoundError } from "@/utils/type-guards/decoder-error/user-defined-type-not-found-error";
import { UserDefinedTypeNotFoundError } from "@/react/components/codec/Format.Errors/interfaces/generic/user-defined-type-not-found-error";
import { isIndexedReferenceTypeError } from "@/utils/type-guards/decoder-error/indexed-reference-type-error";
import { IndexedReferenceTypeError } from "@/react/components/codec/Format.Errors/interfaces/generic/indexed-reference-type-error";
import { ReadError } from "@/react/components/codec/Format.Errors/types/generic/read-error";

export const { GenericError } = createCodecComponent(
  "GenericError",
  (data: Format.Errors.GenericError) =>
    isUserDefinedTypeNotFoundError(data) ? (
      <UserDefinedTypeNotFoundError data={data} />
    ) : isIndexedReferenceTypeError(data) ? (
      <IndexedReferenceTypeError data={data} />
    ) : (
      <ReadError data={data} />
    )
);
