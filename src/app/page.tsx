import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { formatDate } from "@/utils";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.published), new Date(b.published));
    });

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-title1 font-bold inline-block">Blog</h1>
          <p className="text-body1-normal text-muted-foreground">
            A blog built using Contentlayer. Posts are written in MDX.
          </p>
        </div>
      </div>
      <hr className="my-8 border-neutral-50" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              <h2 className="text-title2 text-bold font-bold">{post.title}</h2>
              {post.published && (
                <p className="text-caption1 text-muted-foreground">
                  {formatDate(post.published)}
                </p>
              )}
              <Link href={`/posts/${post.slug}`} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  );
}
