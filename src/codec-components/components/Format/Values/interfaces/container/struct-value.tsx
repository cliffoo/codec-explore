import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { NameValuePair } from "@/components/Format/Values/interfaces/other/name-value-pair";

const displayName = "StructValue";

export const { StructValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.StructValue) => (
      // TODO
      <>
        {value.map((nameValuePair, index) => (
          <NameValuePair data={nameValuePair} key={index} />
        ))}
      </>
    )
  )
};
