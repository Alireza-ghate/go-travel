import { useState } from "react";
import { motion } from "motion/react";
import { type BlogPost } from "../../utils/contentTypes";
import formatDate from "../../utils/formatDate";

interface BlogPostProps {
  post: BlogPost;
}

function BlogPost({ post: { alt, date, img, summary, title } }: BlogPostProps) {
  const [imageLoaded, setImageloaded] = useState<boolean>(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 20 }}
      className="group flex cursor-pointer items-center justify-between gap-x-36"
    >
      <div className="overflow-hidden rounded-[1.5rem]">
        <img
          onLoad={() => setImageloaded(true)}
          src={img}
          alt={alt}
          className="max-h-108 transform rounded-[1.375rem] transition-all duration-300 ease-in-out group-hover:scale-103"
        />
      </div>
      <div className="tracking-6 my-7 mr-11 max-w-195">
        <p className="text-grey-900 mb-4.5 text-xl font-medium">
          {formatDate(date)}
        </p>
        <h4 className="mb-6 text-[2.75rem] font-medium">{title}</h4>
        <p className="text-grey-800 mb-6 text-lg/13.5 font-normal">{summary}</p>
        <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[.625rem] px-8 py-3.5 text-lg font-medium text-white transition-colors duration-200">
          View more
        </button>
      </div>
    </motion.li>
  );
}

export default BlogPost;
