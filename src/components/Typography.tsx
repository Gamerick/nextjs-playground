export function H1(props: { children: React.ReactNode }) {
  return <h1 className="text-4xl font-bold">{props.children}</h1>;
}

export function H2(props: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold">{props.children}</h2>;
}

export function H3(props: { children: React.ReactNode }) {
  return <h3 className="text-xl font-bold">{props.children}</h3>;
}
