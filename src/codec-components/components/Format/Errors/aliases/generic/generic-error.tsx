import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUserDefinedTypeNotFoundError } from "@/utils/type-guards/decoder-error/user-defined-type-not-found-error";
import { UserDefinedTypeNotFoundError } from "@/components/Format/Errors/interfaces/generic/user-defined-type-not-found-error";
import { isIndexedReferenceTypeError } from "@/utils/type-guards/decoder-error/indexed-reference-type-error";
import { IndexedReferenceTypeError } from "@/components/Format/Errors/interfaces/generic/indexed-reference-type-error";
import { ReadError } from "@/components/Format/Errors/aliases/generic/read-error";

export const GenericError = createPolymorphicComponent(
  (data: Format.Errors.GenericError) =>
    isUserDefinedTypeNotFoundError(data) ? (
      <UserDefinedTypeNotFoundError data={data} />
    ) : isIndexedReferenceTypeError(data) ? (
      <IndexedReferenceTypeError data={data} />
    ) : (
      <ReadError data={data} />
    )
);
