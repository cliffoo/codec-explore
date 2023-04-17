const colors = {
  red: "#f85149",
  blue: "#2f81f7",
  purple: "#a371f7"
};

interface CodeProps {
  children: string | number | (string | number)[];
  color?: keyof typeof colors;
  title?: string;
}

export function Code({ children, color, title }: CodeProps) {
  return (
    <span>
      <code style={color && { color: colors[color] }} title={title}>
        {children}
      </code>
    </span>
  );
}
