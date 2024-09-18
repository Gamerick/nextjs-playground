import Link from "@/components/Link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-2">
      <Link href="/experiments">Experiments</Link>
    </div>
  );
}
