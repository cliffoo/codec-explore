import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Result } from "@/components/Format/Values/aliases/general/result";

const displayName = "MagicValue";

export const { MagicValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.MagicValue) => (
      // TODO
      <>
        {Object.values(value).map((result, index) => (
          <Result data={result} key={index} />
        ))}
      </>
    )
  )
};
