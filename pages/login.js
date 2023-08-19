import Form from "@/components/auth/Form";
import React from "react";
import { getSession, signIn } from "next-auth/react";

function Login() {
  const onSubmit = async (name, lastName, email, password, repeatPassword) => {
    const data = await signIn("credentials", {
      redirect: false,
      name,
      lastName,
      email,
      password,
      repeatPassword,
    });
    window.location.href = "/dashboard";
  };
  return (
    <>
      <div className="bg-white p-4">
        <h1 className="text-2xl ml-20 font-semibold">Login</h1>
      </div>
      <Form signin={true} onFormSubmit={onSubmit} />
    </>
  );
}
export default Login;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
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
