import Link from "next/link";

export default function CustomLink(props: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={props.href} className="text-blue-600 hover:underline">
      {props.children}
    </Link>
  );
}
