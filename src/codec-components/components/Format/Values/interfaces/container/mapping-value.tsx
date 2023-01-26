import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { KeyValuePair } from "@/components/Format/Values/interfaces/other/key-value-pair";

const displayName = "MappingValue";

export const { MappingValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.MappingValue) => (
      // TODO
      <>
        {value.map((keyValuePair, index) => (
          <KeyValuePair data={keyValuePair} key={index} />
        ))}
      </>
    )
  )
};
