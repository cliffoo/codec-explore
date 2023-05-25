import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isElementaryResult } from "@/utils/type-guards/value-and-result/elementary";
import { ElementaryResult } from "@/react/components/codec/Codec.Format.Values/types/general/elementary-result";
import { isArrayResult } from "@/utils/type-guards/value-and-result/array";
import { ArrayResult } from "@/react/components/codec/Codec.Format.Values/types/container/array-result";
import { isMappingResult } from "@/utils/type-guards/value-and-result/mapping";
import { MappingResult } from "@/react/components/codec/Codec.Format.Values/types/container/mapping-result";
import { isStructResult } from "@/utils/type-guards/value-and-result/struct";
import { StructResult } from "@/react/components/codec/Codec.Format.Values/types/container/struct-result";
import { isTupleResult } from "@/utils/type-guards/value-and-result/tuple";
import { TupleResult } from "@/react/components/codec/Codec.Format.Values/types/container/tuple-result";
import { isMagicResult } from "@/utils/type-guards/value-and-result/magic";
import { MagicResult } from "@/react/components/codec/Codec.Format.Values/types/special-container/magic-result";
import { isTypeResult } from "@/utils/type-guards/value-and-result/type";
import { TypeResult } from "@/react/components/codec/Codec.Format.Values/types/special-container/type-result";
import { isFunctionExternalResult } from "@/utils/type-guards/value-and-result/function-external";
import { FunctionExternalResult } from "@/react/components/codec/Codec.Format.Values/types/function/function-external-result";
import { isFunctionInternalResult } from "@/utils/type-guards/value-and-result/function-internal";
import { FunctionInternalResult } from "@/react/components/codec/Codec.Format.Values/types/function/function-internal-result";
import { OptionsResult } from "@/react/components/codec/Codec.Format.Values/types/special/options-result";

export const { Result } = createCodecComponent(
  "Result",
  (data: Format.Values.Result) =>
    isElementaryResult(data) ? (
      <ElementaryResult data={data} />
    ) : isArrayResult(data) ? (
      <ArrayResult data={data} />
    ) : isMappingResult(data) ? (
      <MappingResult data={data} />
    ) : isStructResult(data) ? (
      <StructResult data={data} />
    ) : isTupleResult(data) ? (
      <TupleResult data={data} />
    ) : isMagicResult(data) ? (
      <MagicResult data={data} />
    ) : isTypeResult(data) ? (
      <TypeResult data={data} />
    ) : isFunctionExternalResult(data) ? (
      <FunctionExternalResult data={data} />
    ) : isFunctionInternalResult(data) ? (
      <FunctionInternalResult data={data} />
    ) : (
      <OptionsResult data={data} />
    )
);
