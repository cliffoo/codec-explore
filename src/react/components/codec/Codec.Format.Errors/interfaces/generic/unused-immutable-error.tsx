import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "UnusedImmutableError";

export const { UnusedImmutableError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.UnusedImmutableError) => <span>{data.kind}</span>
  )
};
