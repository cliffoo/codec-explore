import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isTypeValue } from "@/utils/type-guards/value-and-result/type";
import { TypeValue } from "@/react/components/codec/Codec.Format.Values/types/special-container/type-value";
import { TypeErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/special-container/type-error-result";

const displayName = "TypeResult";

export const { TypeResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.TypeResult) =>
      isTypeValue(data) ? (
        <TypeValue data={data} />
      ) : (
        <TypeErrorResult data={data} />
      )
  )
};
