import Link from "next/link";
import type { PostMeta } from "@/src/api";
import styles from "@/styles/Articles.module.css";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <ul className={styles.list}>
      {posts.map((post) => (
        <li key={post.slug}>
          <div className="my-4 py-4 border-b">
            <div className={styles.title}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </div>
            <time className="text-gray-400">{post.date}</time>
            <p className="mt-4 italic">{post.excerpt}</p>
            <p className={styles.tags}>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
          </div>
        </li>
      ))}
    </ul>
  );
}