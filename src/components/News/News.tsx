import useQueryBlogPosts from "../../Hooks/useQueryBlogPosts";
import Error from "../Error";
import Loader from "../Loader";
import BlogPost from "./BlogPost";

function News() {
  const { blogPosts, error, isLoading } = useQueryBlogPosts();
  console.log(error, isLoading);

  return (
    <section className="px-24 py-36">
      <div className="mx-auto max-w-389">
        <h2 className="tracking-6 mb-34 text-center text-[3.25rem] font-semibold">
          Latest news from us
        </h2>

        {/* success state */}
        {!isLoading && !error && (
          <ul className="flex flex-col gap-y-34">
            {blogPosts?.map((post) => <BlogPost key={post.id} post={post} />)}
          </ul>
        )}

        {/* error state */}
        {!isLoading && error && (
          <Error>
            It looks like something went wrong while loading our recent news
          </Error>
        )}

        {/* loading state */}
        {isLoading && !error && <Loader />}
      </div>
    </section>
  );
}

export default News;
