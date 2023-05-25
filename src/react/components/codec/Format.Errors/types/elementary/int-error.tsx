import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { IntPaddingError } from "@/react/components/codec/Format.Errors/interfaces/elementary/int-padding-error";

export const { IntError } = createCodecComponent(
  "IntError",
  (data: Format.Errors.IntError) => <IntPaddingError data={data} />
);
