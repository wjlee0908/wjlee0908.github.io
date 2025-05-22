import { Icons } from "@/components/icons";
import { allPosts } from "contentlayer/generated";
import dayjs from "dayjs";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

/**
 * 빌드 시점에 동적 라우팅 사용하는 경로 생성
 */
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug.split("/").slice(1),
  }));
}

const getPostFromParams = async (paramsAsync: PostPageProps["params"]) => {
  const params = await paramsAsync;
  const slug = params.slug.join("/");
  const post = allPosts.find((post) => post.slug === "/" + slug);

  console.log({ slug, allPosts });

  if (!post) {
    return null;
  }

  return post;
};

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/posts"
        className={"absolute left-[-200px] top-14 hidden xl:inline-flex"}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div>
        {post.published && (
          <time
            dateTime={post.published}
            className="block text-sm text-muted-foreground"
          >
            {dayjs(post.published).format("YYYY.MM.DD")}
          </time>
        )}
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
      </div>
      {post.body.html}
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/posts">
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  );
}
