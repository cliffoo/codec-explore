import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { StorageNotSuppliedError } = createCodecComponent(
  "StorageNotSuppliedError",
  (data: Format.Errors.StorageNotSuppliedError) => (
    // TODO
    <span>{data.slot.toString()}</span>
  )
);
