import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUnsupportedConstantError } from "@/utils/type-guards/decoder-error/unsupported-constant-error";
import { UnsupportedConstantError } from "@/components/Format/Errors/interfaces/generic/unsupported-constant-error";
import { isReadErrorStack } from "@/utils/type-guards/decoder-error/read-error-stack";
import { ReadErrorStack } from "@/components/Format/Errors/interfaces/generic/read-error-stack";
import { isReadErrorBytes } from "@/utils/type-guards/decoder-error/read-error-bytes";
import { ReadErrorBytes } from "@/components/Format/Errors/interfaces/generic/read-error-bytes";
import { isReadErrorStorage } from "@/utils/type-guards/decoder-error/read-error-storage";
import { ReadErrorStorage } from "@/components/Format/Errors/interfaces/generic/read-error-storage";
import { isStorageNotSuppliedError } from "@/utils/type-guards/decoder-error/storage-not-supplied-error";
import { StorageNotSuppliedError } from "@/components/Format/Errors/interfaces/generic/storage-not-supplied-error";
import { isUnusedImmutableError } from "@/utils/type-guards/decoder-error/unused-immutable-error";
import { UnusedImmutableError } from "@/components/Format/Errors/interfaces/generic/unused-immutable-error";
import { CodeNotSuppliedError } from "@/components/Format/Errors/interfaces/generic/code-not-supplied-error";

export const ReadError = createPolymorphicComponent(
  (data: Format.Errors.ReadError) =>
    isUnsupportedConstantError(data) ? (
      <UnsupportedConstantError data={data} />
    ) : isReadErrorStack(data) ? (
      <ReadErrorStack data={data} />
    ) : isReadErrorBytes(data) ? (
      <ReadErrorBytes data={data} />
    ) : isReadErrorStorage(data) ? (
      <ReadErrorStorage data={data} />
    ) : isStorageNotSuppliedError(data) ? (
      <StorageNotSuppliedError data={data} />
    ) : isUnusedImmutableError(data) ? (
      <UnusedImmutableError data={data} />
    ) : (
      <CodeNotSuppliedError data={data} />
    )
);
