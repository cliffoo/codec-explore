import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isElementaryValue } from "@/utils/type-guards/value-and-result/elementary";
import { ElementaryValue } from "@/react/components/codec/Format.Values/types/general/elementary-value";
import { isArrayValue } from "@/utils/type-guards/value-and-result/array";
import { ArrayValue } from "@/react/components/codec/Format.Values/interfaces/container/array-value";
import { isMappingValue } from "@/utils/type-guards/value-and-result/mapping";
import { MappingValue } from "@/react/components/codec/Format.Values/interfaces/container/mapping-value";
import { isStructValue } from "@/utils/type-guards/value-and-result/struct";
import { StructValue } from "@/react/components/codec/Format.Values/interfaces/container/struct-value";
import { isTupleValue } from "@/utils/type-guards/value-and-result/tuple";
import { TupleValue } from "@/react/components/codec/Format.Values/interfaces/container/tuple-value";
import { isMagicValue } from "@/utils/type-guards/value-and-result/magic";
import { MagicValue } from "@/react/components/codec/Format.Values/interfaces/special-container/magic-value";
import { isTypeValue } from "@/utils/type-guards/value-and-result/type";
import { TypeValue } from "@/react/components/codec/Format.Values/types/special-container/type-value";
import { isFunctionExternalValue } from "@/utils/type-guards/value-and-result/function-external";
import { FunctionExternalValue } from "@/react/components/codec/Format.Values/interfaces/function/function-external-value";
import { isFunctionInternalValue } from "@/utils/type-guards/value-and-result/function-internal";
import { FunctionInternalValue } from "@/react/components/codec/Format.Values/interfaces/function/function-internal-value";
import { OptionsValue } from "@/react/components/codec/Format.Values/interfaces/special/options-value";

export const { Value } = createCodecComponent(
  "Value",
  (data: Format.Values.Value) =>
    isElementaryValue(data) ? (
      <ElementaryValue data={data} />
    ) : isArrayValue(data) ? (
      <ArrayValue data={data} />
    ) : isMappingValue(data) ? (
      <MappingValue data={data} />
    ) : isStructValue(data) ? (
      <StructValue data={data} />
    ) : isTupleValue(data) ? (
      <TupleValue data={data} />
    ) : isMagicValue(data) ? (
      <MagicValue data={data} />
    ) : isTypeValue(data) ? (
      <TypeValue data={data} />
    ) : isFunctionExternalValue(data) ? (
      <FunctionExternalValue data={data} />
    ) : isFunctionInternalValue(data) ? (
      <FunctionInternalValue data={data} />
    ) : (
      <OptionsValue data={data} />
    )
);
