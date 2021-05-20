import Link from "next/link";
export default function Home() {
  return (
    <Link href="/posts">
      <button>Go to all posts</button>
    </Link>
  );
}
