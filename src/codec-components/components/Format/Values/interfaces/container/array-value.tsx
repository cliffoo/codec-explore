import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Result } from "@/components/Format/Values/aliases/general/result";

export const ArrayValue = createPolymorphicComponent(
  ({ value }: Format.Values.ArrayValue) => (
    // TODO
    <>
      {value.map((result, index) => (
        <Result data={result} key={index} />
      ))}
    </>
  )
);
