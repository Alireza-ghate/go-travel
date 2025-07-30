import { createClient } from "@supabase/supabase-js";
import { BlogPost } from "../utils/contentTypes";
import { Database } from "./Database";

const supabaseUrl = "https://fnkzsitgfwelmhqqgqqb.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY;
// create supabase client
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

//create functions for fetching data from our tables in supabase using this supabase client
export async function getBlogPost() {
  const { data, error } = await supabase.from("BlogPosts").select("*");
  // throw error manually
  // throw new Error("something went wrong...");

  // handled by react query
  if (error)
    throw new Error(
      `ERROR: database returned error when fetching blog posts ${error.message}`,
    );

  //   BlogPost = {
  //   id: string;
  //   img: string;
  //   alt: string;
  //   date: string;
  //   title: string;
  //   summary: string;
  // }
  // post {
  //   id,
  //   img_url,
  //   article_title,
  //   ...
  // }

  // change properties with _ to normal properties
  const blogPosts: BlogPost[] = data.map((post) => {
    return {
      id: post.id,
      alt: post.img_alt,
      date: post.date_created,
      img: post.img_url,
      summary: post.article_summary,
      title: post.article_title,
    };
  });

  return blogPosts;
}
