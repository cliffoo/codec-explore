import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isTypeValueContract } from "@/utils/type-guards/value-and-result/type-value-contract";
import { TypeValueContract } from "@/react/components/codec/Codec.Format.Values/interfaces/special-container/type-value-contract";
import { TypeValueEnum } from "@/react/components/codec/Codec.Format.Values/interfaces/special-container/type-value-enum";

export const { TypeValue } = createCodecComponent(
  "TypeValue",
  (data: Format.Values.TypeValue) =>
    isTypeValueContract(data) ? (
      <TypeValueContract data={data} />
    ) : (
      <TypeValueEnum data={data} />
    )
);
