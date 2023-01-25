import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { NameValuePair } from "@/components/Format/Values/interfaces/other/name-value-pair";

export const TypeValueContract = createPolymorphicComponent(
  ({ value }: Format.Values.TypeValueContract) => (
    // TODO
    <>
      {value.map((nameValuePair, index) => (
        <NameValuePair data={nameValuePair} key={index} />
      ))}
    </>
  )
);
