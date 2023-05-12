import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isTypeValueContract } from "@/utils/type-guards/value-and-result/type-value-contract";
import { TypeValueContract } from "@/react/components/codec/Codec.Format.Values/interfaces/special-container/type-value-contract";
import { TypeValueEnum } from "@/react/components/codec/Codec.Format.Values/interfaces/special-container/type-value-enum";

const displayName = "TypeValue";

export const { TypeValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.TypeValue) =>
      isTypeValueContract(data) ? (
        <TypeValueContract data={data} />
      ) : (
        <TypeValueEnum data={data} />
      )
  )
};
