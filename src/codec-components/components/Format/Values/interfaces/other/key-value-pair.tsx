import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ElementaryValue } from "@/components/Format/Values/aliases/general/elementary-value";
import { Result } from "@/components/Format/Values/aliases/general/result";

export const KeyValuePair = createPolymorphicComponent(
  ({ key, value }: Format.Values.KeyValuePair) => (
    // TODO
    <>
      <ElementaryValue data={key} />: <Result data={value} />
    </>
  )
);
