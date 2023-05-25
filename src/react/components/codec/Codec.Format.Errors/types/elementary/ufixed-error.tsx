import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { UfixedPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/ufixed-padding-error";

export const { UfixedError } = createCodecComponent(
  "UfixedError",
  (data: Format.Errors.UfixedError) => <UfixedPaddingError data={data} />
);
