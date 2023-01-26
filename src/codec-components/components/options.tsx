import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "Options";

export const { Options } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.Options) => (
      // TODO
      <ul>
        {Object.entries(data).map(([name, value], index) => (
          <li key={index}>
            {name}: {value}
          </li>
        ))}
      </ul>
    )
  )
};
