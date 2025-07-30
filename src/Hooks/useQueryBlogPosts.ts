import { useQuery } from "@tanstack/react-query";
import { getBlogPost } from "../api/api";

function useQueryBlogPosts() {
  const {
    data: blogPosts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["BlogPosts"],
    queryFn: getBlogPost,
  });

  return { blogPosts, error, isLoading };
}

export default useQueryBlogPosts;
