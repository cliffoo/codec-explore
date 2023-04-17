const colors = [
  "blue",
  "darkblue",
  "seagreen",
  "teal",
  "brown",
  "peru"
] as const;

interface CodeProps {
  children: string | number | (string | number)[];
  color?: typeof colors[number];
  title?: string;
}

export function Code({ children, color, title }: CodeProps) {
  return (
    <span>
      <code style={{ color }} title={title}>
        {children}
      </code>
    </span>
  );
}
