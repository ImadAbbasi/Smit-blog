import React from "react";
import Link from "next/link";
import { BsPenFill } from "react-icons/bs";
import { getSession, useSession } from "next-auth/react";

function Profile() {
  const { data: session } = useSession();
  return (
    <section>
      <div>
        <div className="flex bg-white py-4 px-24 justify-between items-center">
          <h1 className="text-3xl font-semibold">Profile</h1>
          <Link
            className="text-violet-500 hover:text-violet-600 font-semibold"
            href={"/dashboard"}
          >
            Go to Dashboard
          </Link>
        </div>
        <div className="bg-white w-2/3 ml-24 mt-14">
          <div className="py-10 px-16">
            <div className="shadow-lg w-36 rounded-2xl">
              <img src="Elon.jpg" alt="" width={150} className="rounded-2xl" />
            </div>
            <form className="mt-4 text-xl font-semibold flex" action="#">
              <input type="text" value={session.user.email} readOnly />
              <a>
                <BsPenFill className="text-violet-500 hover:text-violet-600 cursor-pointer" />
              </a>
            </form>
            <h2 className="mb-2 text-xl font-semibold">Password</h2>
            <form action="#">
              <div className="flex flex-col">
                <input
                  className="py-1 px-3 w-60 outline-none border-2 my-1 rounded-md focus:border-violet-500"
                  type="password"
                  placeholder="Old Password"
                />
                <input
                  className="py-1 px-3 w-60 outline-none border-2 my-1 rounded-md focus:border-violet-500"
                  type="password"
                  placeholder="New Password"
                />
                <input
                  className="py-1 px-3 w-60 outline-none border-2 my-1 rounded-md focus:border-violet-500"
                  type="password"
                  placeholder="Repeat Password"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
