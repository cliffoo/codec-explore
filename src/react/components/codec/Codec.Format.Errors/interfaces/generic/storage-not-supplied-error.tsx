import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "StorageNotSuppliedError";

export const { StorageNotSuppliedError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.StorageNotSuppliedError) => (
      <span>{data.slot.toString()}</span>
    )
  )
};
