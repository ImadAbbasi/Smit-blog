import { getAllBlogs } from "@/services/blogs";
import Link from "next/link";

export default function Home({ blogs }) {
  return (
    <section className="">
      <div className="bg-white p-4">
        <h1 className="text-3xl ml-20 font-semibold">Good Morning Readers!</h1>
      </div>
      <div>
        <h2 className="text-2xl font-semibold ml-24 mt-4">All Blogs</h2>
      </div>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white w-2/3 ml-24 my-3 p-4 rounded-md shadow-sm border-[1px]"
        >
          <div className="flex">
            <div className="h-28 ml-4">
              <img className="rounded-2xl" src="elon.jpg" alt="" width={"60"} />
            </div>
            <div className="ml-4 mt-6">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-gray-500 font-semibold">
                {blog.author} - {blog.datePublished}
              </p>
            </div>
          </div>
          <div className="p-4 -mt-12">
            <p>{blog.content}</p>
            <div className="mt-4">
              <Link href="#" className="text-violet-500 hover:text-violet-600">
                see all from this user
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export async function getServerSideProps() {
  // const url = "http://localhost:3000/api/blogs/blogs.js";
  // const blogs = await fetch(url);
  const blogs = getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
