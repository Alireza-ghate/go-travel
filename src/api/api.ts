import { createClient } from "@supabase/supabase-js";
import { BlogPost, Lead, Location } from "../utils/contentTypes";
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

export async function getLocations() {
  const { data, error } = await supabase.from("Locations").select("*");
  // throw new Error("");

  if (error)
    throw new Error(
      `ERROR: database returned error when fetching locations ${error.message}`,
    );

  const locations: Location[] = data.map((location) => {
    return {
      id: location.id,
      img: location.img_url,
      alt: location.img_alt,
      location: location.location,
      pricePerPerson: location.price_per_person,
      rating: location.rating,
      title: location.title,
    };
  });

  return locations;
}

export async function insertLead(lead: Lead) {
  const { error } = await supabase
    .from("Leads")
    .insert([
      {
        //lead_id is created by supabase in tables
        // change camelCase naming to _ to match tr in Lead tables with col names
        created_at: lead.createdAt,
        full_name: lead.fullName,
        email_address: lead.emailAddress,
      },
    ])
    .select();

  if (error)
    throw new Error(
      `ERROR: database returned error when inserting lead data: ${error.message}`,
    );
}
