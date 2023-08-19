import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Header() {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex justify-between px-24 bg-violet-500 py-1 text-white font-bold">
        <div>
          <Link href={"/"}>Personal Blogging App</Link>
        </div>
        <div>
          {session ? (
            <Link className="mr-4" href={"/profile"}>
              {session.user.email}
            </Link>
          ) : (
            ""
          )}
          {session ? (
            <Link onClick={signOut} href={"/"}>
              Logout
            </Link>
          ) : (
            <Link href={"/login"}>Login</Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
