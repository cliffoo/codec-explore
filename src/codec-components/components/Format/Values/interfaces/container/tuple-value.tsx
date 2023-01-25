import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { OptionallyNamedValue } from "@/components/Format/Values/interfaces/other/optionally-named-value";

export const TupleValue = createPolymorphicComponent(
  ({ value }: Format.Values.TupleValue) => (
    // TODO
    <>
      {value.map((optionallyNamedValue, index) => (
        <OptionallyNamedValue data={optionallyNamedValue} key={index} />
      ))}
    </>
  )
);
