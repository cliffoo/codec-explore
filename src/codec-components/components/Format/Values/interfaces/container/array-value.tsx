import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Result } from "@/components/Format/Values/aliases/general/result";
import { Container } from "@/common/container";

const displayName = "ArrayValue";

export const { ArrayValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.ArrayValue) => (
      <Container prefix={<code>[</code>} suffix={<code>]</code>}>
        {value.map((result, index) => (
          <div key={index}>
            <Result data={result} />
            {index !== value.length - 1 && <code>,&nbsp;</code>}
          </div>
        ))}
      </Container>
    )
  )
};
