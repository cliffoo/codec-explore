import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isTypeValueContract } from "@/utils/type-guards/value-and-result/type-value-contract";
import { TypeValueContract } from "@/components/Format/Values/interfaces/special-container/type-value-contract";
import { TypeValueEnum } from "@/components/Format/Values/interfaces/special-container/type-value-enum";

export const TypeValue = createPolymorphicComponent(
  (data: Format.Values.TypeValue) =>
    isTypeValueContract(data) ? (
      <TypeValueContract data={data} />
    ) : (
      <TypeValueEnum data={data} />
    )
);
