import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isElementaryErrorResult } from "@/utils/type-guards/value-and-result/elementary";
import { ElementaryErrorResult } from "@/components/Format/Errors/aliases/elementary/elementary-error-result";
import { isArrayErrorResult } from "@/utils/type-guards/value-and-result/array";
import { ArrayErrorResult } from "@/components/Format/Errors/interfaces/container/array-error-result";
import { isMappingErrorResult } from "@/utils/type-guards/value-and-result/mapping";
import { MappingErrorResult } from "@/components/Format/Errors/interfaces/container/mapping-error-result";
import { isStructErrorResult } from "@/utils/type-guards/value-and-result/struct";
import { StructErrorResult } from "@/components/Format/Errors/interfaces/container/struct-error-result";
import { isMagicErrorResult } from "@/utils/type-guards/value-and-result/magic";
import { MagicErrorResult } from "@/components/Format/Errors/interfaces/special-container/magic-error-result";
import { isTypeErrorResult } from "@/utils/type-guards/value-and-result/type";
import { TypeErrorResult } from "@/components/Format/Errors/interfaces/special-container/type-error-result";
import { isTupleErrorResult } from "@/utils/type-guards/value-and-result/tuple";
import { TupleErrorResult } from "@/components/Format/Errors/interfaces/container/tuple-error-result";
import { isFunctionExternalErrorResult } from "@/utils/type-guards/value-and-result/function-external";
import { FunctionExternalErrorResult } from "@/components/Format/Errors/interfaces/function/function-external-error-result";
import { isFunctionInternalErrorResult } from "@/utils/type-guards/value-and-result/function-internal";
import { FunctionInternalErrorResult } from "@/components/Format/Errors/interfaces/function/function-internal-error-result";
import { OptionsErrorResult } from "@/components/Format/Errors/interfaces/other/options-error-result";

export const ErrorResult = createPolymorphicComponent(
  (data: Format.Errors.ErrorResult) =>
    isElementaryErrorResult(data) ? (
      <ElementaryErrorResult data={data} />
    ) : isArrayErrorResult(data) ? (
      <ArrayErrorResult data={data} />
    ) : isMappingErrorResult(data) ? (
      <MappingErrorResult data={data} />
    ) : isStructErrorResult(data) ? (
      <StructErrorResult data={data} />
    ) : isMagicErrorResult(data) ? (
      <MagicErrorResult data={data} />
    ) : isTypeErrorResult(data) ? (
      <TypeErrorResult data={data} />
    ) : isTupleErrorResult(data) ? (
      <TupleErrorResult data={data} />
    ) : isFunctionExternalErrorResult(data) ? (
      <FunctionExternalErrorResult data={data} />
    ) : isFunctionInternalErrorResult(data) ? (
      <FunctionInternalErrorResult data={data} />
    ) : (
      <OptionsErrorResult data={data} />
    )
);