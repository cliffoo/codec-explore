import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isMappingValue } from "@/utils/type-guards/value-and-result/mapping";
import { MappingValue } from "@/components/Format/Values/interfaces/container/mapping-value";
import { MappingErrorResult } from "@/components/Format/Errors/interfaces/container/mapping-error-result";

const displayName = "MappingResult";

export const { MappingResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.MappingResult) =>
      isMappingValue(data) ? (
        <MappingValue data={data} />
      ) : (
        <MappingErrorResult data={data} />
      )
  )
};
