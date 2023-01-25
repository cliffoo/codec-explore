import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const Options = createPolymorphicComponent((data: Codec.Options) => (
  // TODO
  <ul>
    {Object.entries(data).map(([name, value], index) => (
      <li key={index}>
        {name}: {value}
      </li>
    ))}
  </ul>
));
