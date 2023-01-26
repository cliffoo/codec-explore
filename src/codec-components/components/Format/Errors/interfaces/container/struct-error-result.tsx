import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isStructError } from "@/utils/type-guards/decoder-error/struct-error";
import { StructError } from "@/components/Format/Errors/aliases/container/struct-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

const displayName = "StructErrorResult";

export const { StructErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.StructErrorResult) =>
      isStructError(error) ? (
        <StructError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
