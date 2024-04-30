import Container from "@/components/container";
import PostList from "@/components/postlist";
import { notFound } from "next/navigation";

export default function Author(props) {
  const { loading, posts, title } = props;

  if (!loading && !posts.length) {
    notFound();
  }

  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold tracking-tight lg:leading-tight text-brand-primary lg:text-5xl dark:text-white">
          {title}
        </h1>
        <p className="mt-1 text-gray-600">{posts.length} Artigos</p>
      </div>
      <div className="grid gap-10 mt-20 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        {posts.map(post => (
          <PostList key={post._id} post={post} aspect="square" />
        ))}
      </div>
    </Container>
  );
}
