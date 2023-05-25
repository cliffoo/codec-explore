import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { Options } = createCodecComponent(
  "Options",
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
);
