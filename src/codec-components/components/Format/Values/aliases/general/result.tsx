import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isElementaryResult } from "@/utils/type-guards/value-and-result/elementary";
import { ElementaryResult } from "@/components/Format/Values/aliases/general/elementary-result";
import { isArrayResult } from "@/utils/type-guards/value-and-result/array";
import { ArrayResult } from "@/components/Format/Values/aliases/container/array-result";
import { isMappingResult } from "@/utils/type-guards/value-and-result/mapping";
import { MappingResult } from "@/components/Format/Values/aliases/container/mapping-result";
import { isStructResult } from "@/utils/type-guards/value-and-result/struct";
import { StructResult } from "@/components/Format/Values/aliases/container/struct-result";
import { isTupleResult } from "@/utils/type-guards/value-and-result/tuple";
import { TupleResult } from "@/components/Format/Values/aliases/container/tuple-result";
import { isMagicResult } from "@/utils/type-guards/value-and-result/magic";
import { MagicResult } from "@/components/Format/Values/aliases/special-container/magic-result";
import { isTypeResult } from "@/utils/type-guards/value-and-result/type";
import { TypeResult } from "@/components/Format/Values/aliases/special-container/type-result";
import { isFunctionExternalResult } from "@/utils/type-guards/value-and-result/function-external";
import { FunctionExternalResult } from "@/components/Format/Values/aliases/function/function-external-result";
import { isFunctionInternalResult } from "@/utils/type-guards/value-and-result/function-internal";
import { FunctionInternalResult } from "@/components/Format/Values/aliases/function/function-internal-result";
import { OptionsResult } from "@/components/Format/Values/aliases/special/options-result";

export const Result = createPolymorphicComponent((data: Format.Values.Result) =>
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
