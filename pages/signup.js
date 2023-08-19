import Form from "@/components/auth/Form";
import React from "react";

export default function Signup() {
  const onSubmit = async (name, lastName, email, password, repeatPassword) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          name,
          lastName,
          email,
          password,
          repeatPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Sign up successful");
        window.location.href = "/login"; //redirect to login page after signup successfull
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-white p-4">
        <h1 className="text-2xl ml-20 font-semibold">Signup</h1>
      </div>
      <Form signin={false} onFormSubmit={onSubmit} />;
    </>
  );
}
