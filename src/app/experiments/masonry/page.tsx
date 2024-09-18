export default function Home() {
  const data = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    title: `Box ${i}`,
    halfWidth: false,
  }));

  data[0].halfWidth = true;

  const boxes = data.map((data) => <Box key={data.title} {...data} />);

  return (
    <div className="flex flex-row items-center justify-center min-h-screen gap-2">
      <Masonry elements={boxes} />
    </div>
  );
}

function Masonry(props: { elements: JSX.Element[] }) {
  const elements = props.elements;

  const topRow = elements.filter((_, idx) => idx % 2 === 0); //evens
  const bottomRow = elements.filter((_, idx) => idx % 2 !== 0); //odds

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">{topRow}</div>
      <div className="flex flex-row gap-2">{bottomRow}</div>
    </div>
  );
}

function Box(props: { title: string; halfWidth?: boolean }) {
  return (
    <div className={`${props.halfWidth ? "w-12" : "w-24"} p-2 bg-blue-600`}>
      <h1>{props.title}</h1>
    </div>
  );
}
