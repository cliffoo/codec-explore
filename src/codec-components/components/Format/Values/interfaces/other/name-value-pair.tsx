import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Result } from "@/components/Format/Values/aliases/general/result";

const displayName = "NameValuePair";

export const { NameValuePair } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ name, value }: Format.Values.NameValuePair) => (
      // TODO
      <>
        {name}: <Result data={value} />
      </>
    )
  )
};
