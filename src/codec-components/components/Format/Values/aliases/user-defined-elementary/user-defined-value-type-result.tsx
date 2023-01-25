import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUserDefinedValueTypeValue } from "@/utils/type-guards/value-and-result/user-defined-value-type";
import { UserDefinedValueTypeValue } from "@/components/Format/Values/interfaces/user-defined-elementary/user-defined-value-type-value";
import { UserDefinedValueTypeErrorResult } from "@/components/Format/Errors/interfaces/user-defined-elementary/user-defined-value-type-error-result";

export const UserDefinedValueTypeResult = createPolymorphicComponent(
  (data: Format.Values.UserDefinedValueTypeResult) =>
    isUserDefinedValueTypeValue(data) ? (
      <UserDefinedValueTypeValue data={data} />
    ) : (
      <UserDefinedValueTypeErrorResult data={data} />
    )
);
