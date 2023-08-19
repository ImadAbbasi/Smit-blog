import React, { useRef } from "react";
import Link from "next/link";

function Form({ signin, onFormSubmit }) {
  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPassRef = useRef();
  const onSubmitHandler = (e) => {
    const name = fNameRef.current.value;
    const lastName = lNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const repeatPassword = repeatPassRef.current.value;
    e.preventDefault();
    onFormSubmit(name, lastName, email, password, repeatPassword);
  };
  return (
    <section className="h-screen w-full">
      <div
        className="h-screen w-full"
        style={{ marginTop: signin ? "4rem" : "1rem" }}
      >
        <div className="flex flex-col justify-center bg-white shadow-md mt-10 mx-auto items-center border-2 w-2/6">
          <form className="w-full py-10 px-20" onSubmit={onSubmitHandler}>
            <div
              className="my-4"
              style={{ display: signin ? "none" : "block" }}
            >
              <input
                className="py-1 px-2 border-2 border-gray-200 w-full focus:ring-0 outline-none focus:border-violet-500 rounded-md"
                type="text"
                placeholder="First Name"
                ref={fNameRef}
              />
            </div>
            <div
              className=" my-4"
              style={{ display: signin ? "none" : "block" }}
            >
              <input
                className="py-1 px-2 border-2 border-gray-200 w-full focus:ring-0 outline-none focus:border-violet-500 rounded-md"
                type="text"
                placeholder="Last Name"
                ref={lNameRef}
              />
            </div>
            <div className="my-4">
              <input
                className="py-1 px-2 border-2 border-gray-200 w-full focus:ring-0 outline-none focus:border-violet-500 rounded-md"
                type="email"
                placeholder="Email"
                ref={emailRef}
              />
            </div>
            <div className="my-4">
              <input
                className="py-1 px-2 border-2 border-gray-200 w-full focus:ring-0 outline-none focus:border-violet-500 rounded-md"
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <div
              className="my-4"
              style={{ display: signin ? "none" : "block" }}
            >
              <input
                className="py-1 px-2 border-2 border-gray-200 w-full focus:ring-0 outline-none focus:border-violet-500 rounded-md"
                type="password"
                placeholder="Repeat Password"
                ref={repeatPassRef}
              />
            </div>
            <div className="text-center">
              <button className="bg-violet-500 text-white px-3 py-2 rounded-md">
                {signin ? "Signin" : "Signup"}
              </button>
            </div>
            <div className="text-gray-400 mt-2 text-center">
              {signin ? "Don't have an account?" : ""}{" "}
              <Link className="text-violet-500" href={"/signup"}>
                {signin ? "Signup" : ""}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
