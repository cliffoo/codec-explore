import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Result } from "@/components/Format/Values/aliases/general/result";

export const NameValuePair = createPolymorphicComponent(
  ({ name, value }: Format.Values.NameValuePair) => (
    // TODO
    <>
      {name}: <Result data={value} />
    </>
  )
);
