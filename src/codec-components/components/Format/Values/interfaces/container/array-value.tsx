import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Result } from "@/components/Format/Values/aliases/general/result";

const displayName = "ArrayValue";

export const { ArrayValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.ArrayValue) => (
      // TODO
      <>
        {value.map((result, index) => (
          <Result data={result} key={index} />
        ))}
      </>
    )
  )
};
