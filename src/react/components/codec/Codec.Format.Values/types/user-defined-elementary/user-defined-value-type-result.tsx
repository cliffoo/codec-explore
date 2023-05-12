import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isUserDefinedValueTypeValue } from "@/utils/type-guards/value-and-result/user-defined-value-type";
import { UserDefinedValueTypeValue } from "@/react/components/codec/Codec.Format.Values/interfaces/user-defined-elementary/user-defined-value-type-value";
import { UserDefinedValueTypeErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/user-defined-elementary/user-defined-value-type-error-result";

const displayName = "UserDefinedValueTypeResult";

export const { UserDefinedValueTypeResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.UserDefinedValueTypeResult) =>
      isUserDefinedValueTypeValue(data) ? (
        <UserDefinedValueTypeValue data={data} />
      ) : (
        <UserDefinedValueTypeErrorResult data={data} />
      )
  )
};
