import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Result } from "@/components/Format/Values/aliases/general/result";

export const MagicValue = createPolymorphicComponent(
  ({ value }: Format.Values.MagicValue) => (
    // TODO
    <>
      {Object.values(value).map((result, index) => (
        <Result data={result} key={index} />
      ))}
    </>
  )
);
