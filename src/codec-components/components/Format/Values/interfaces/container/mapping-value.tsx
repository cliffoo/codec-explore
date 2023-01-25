import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { KeyValuePair } from "@/components/Format/Values/interfaces/other/key-value-pair";

export const MappingValue = createPolymorphicComponent(
  ({ value }: Format.Values.MappingValue) => (
    // TODO
    <>
      {value.map((keyValuePair, index) => (
        <KeyValuePair data={keyValuePair} key={index} />
      ))}
    </>
  )
);
