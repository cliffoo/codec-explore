import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isUserDefinedValueTypeValue } from "@/utils/type-guards/value-and-result/user-defined-value-type";
import { UserDefinedValueTypeValue } from "@/react/components/codec/Format.Values/interfaces/user-defined-elementary/user-defined-value-type-value";
import { UserDefinedValueTypeErrorResult } from "@/react/components/codec/Format.Errors/interfaces/user-defined-elementary/user-defined-value-type-error-result";

export const { UserDefinedValueTypeResult } = createCodecComponent(
  "UserDefinedValueTypeResult",
  (data: Format.Values.UserDefinedValueTypeResult) =>
    isUserDefinedValueTypeValue(data) ? (
      <UserDefinedValueTypeValue data={data} />
    ) : (
      <UserDefinedValueTypeErrorResult data={data} />
    )
);
