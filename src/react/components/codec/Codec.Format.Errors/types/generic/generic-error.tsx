import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isUserDefinedTypeNotFoundError } from "@/utils/type-guards/decoder-error/user-defined-type-not-found-error";
import { UserDefinedTypeNotFoundError } from "@/react/components/codec/Codec.Format.Errors/interfaces/generic/user-defined-type-not-found-error";
import { isIndexedReferenceTypeError } from "@/utils/type-guards/decoder-error/indexed-reference-type-error";
import { IndexedReferenceTypeError } from "@/react/components/codec/Codec.Format.Errors/interfaces/generic/indexed-reference-type-error";
import { ReadError } from "@/react/components/codec/Codec.Format.Errors/types/generic/read-error";

const displayName = "GenericError";

export const { GenericError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.GenericError) =>
      isUserDefinedTypeNotFoundError(data) ? (
        <UserDefinedTypeNotFoundError data={data} />
      ) : isIndexedReferenceTypeError(data) ? (
        <IndexedReferenceTypeError data={data} />
      ) : (
        <ReadError data={data} />
      )
  )
};
