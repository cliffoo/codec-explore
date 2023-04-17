import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Result } from "@/components/Format/Values/aliases/general/result";
import { Container } from "@/common/container";
import { Code } from "@/common/code";

const displayName = "ArrayValue";

export const { ArrayValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.ArrayValue) => (
      <Container
        prefix={<Code color="blue">[</Code>}
        suffix={<Code color="blue">]</Code>}
      >
        {value.map((result, index) => (
          <div key={index}>
            <Result data={result} />
            {index !== value.length - 1 && <Code>,&nbsp;</Code>}
          </div>
        ))}
      </Container>
    )
  )
};
