import CustomLink from "@/components/Link";
import { H1 } from "@/components/Typography";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-2">
      <H1>Experiments</H1>
      <ul>
        <li>
          <CustomLink href="/experiments/masonry">Masonry</CustomLink>
        </li>
      </ul>
    </div>
  );
}
