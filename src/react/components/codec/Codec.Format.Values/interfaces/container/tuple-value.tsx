import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { OptionallyNamedValue } from "@/react/components/codec/Codec.Format.Values/interfaces/other/optionally-named-value";

export const { TupleValue } = createCodecComponent(
  "TupleValue",
  ({ value }: Format.Values.TupleValue) => (
    // TODO
    <>
      {value.map((optionallyNamedValue, index) => (
        <OptionallyNamedValue data={optionallyNamedValue} key={index} />
      ))}
    </>
  )
);
