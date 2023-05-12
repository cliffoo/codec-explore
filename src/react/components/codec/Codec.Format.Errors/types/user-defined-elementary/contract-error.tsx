import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { ContractPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/user-defined-elementary/contract-padding-error";

const displayName = "ContractError";

export const { ContractError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.ContractError) => <ContractPaddingError data={data} />
  )
};
