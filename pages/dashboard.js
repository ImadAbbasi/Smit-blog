import { useSession } from "next-auth/react";
import React, { useRef } from "react";
import Link from "next/link";
import { getAllBlogs } from "@/services/blogs";

function Dashboard({ blogs }) {
  const { data: session } = useSession();
  const placeref = useRef();
  const postref = useRef();
  const onPublish = async (author, title, content) => {
    try {
      const response = await fetch("/api/blogs/saveBlog", {
        method: "POST",
        body: JSON.stringify({
          author,
          title,
          content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Blog published successful");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onPublishHandler = (e) => {
    const author = session.user.email;
    const placeholder = placeref.current.value;
    const post = postref.current.value;
    e.preventDefault();
    onPublish(author, placeholder, post);
  };
  return (
    <section>
      <div>
        <div className="bg-white p-4">
          <h1 className="text-3xl ml-20 font-semibold">Dashboard</h1>
        </div>
        <div>
          <form onSubmit={onPublishHandler}>
            <div className="flex flex-col w-2/3 rounded-md shadow-md py-10 px-16 mt-6 ml-24 bg-white">
              <input
                className="border-2 my-2 p-2 rounded-lg outline-none focus:border-violet-500"
                type="text"
                ref={placeref}
                placeholder="placeholder"
              />
              <textarea
                className="border-2 my-2 p-2 rounded-lg outline-none focus:border-violet-500"
                cols="0"
                rows="4"
                ref={postref}
                placeholder="What is in your mind"
              ></textarea>
              <button className="bg-violet-500 hover:bg-violet-600 w-32 font-semibold text-white px-3 py-2 rounded-md">
                Publish Blog
              </button>
            </div>
          </form>
          <div>
            <h2 className="text-2xl font-semibold ml-24 mt-4">My Blogs</h2>
          </div>
          {blogs
            .filter((item) => item.author === session?.user?.email)
            .map((blog) => (
              <div
                key={blog.id}
                className="bg-white w-2/3 ml-24 my-3 p-4 rounded-md shadow-sm border-[1px]"
              >
                <div className="flex">
                  <div className="h-28 ml-4">
                    <img
                      className="rounded-2xl"
                      src="elon.jpg"
                      alt=""
                      width={"60"}
                    />
                  </div>
                  <div className="ml-4 mt-6">
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                    <p className="text-gray-500 font-semibold">
                      {session.user.email} -
                    </p>
                  </div>
                </div>
                <div className="p-4 -mt-12">
                  <p>{blog.content}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

export async function getServerSideProps() {
  // const response = await fetch("http://localhost:3000/api/blogs/blogs.js");
  // const blogs = await response.json();
  const blogs = getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
