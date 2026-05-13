"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const LogIn = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

  
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { email, password } = user;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (data) {
      router.push("/");
    }

    if (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f6f2] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-8 md:p-12">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Login Your Account
          </h1>
        </div>

        {/* Form */}
        <Form onSubmit={handleForm} className="flex flex-col gap-5">

          {/* Email */}
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Password */}
          <TextField isRequired minLength={8} name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              type="submit"
              className="bg-sky-500 rounded-none text-white px-6 font-semibold w-full"
            >
              Login
            </Button>

            <Button
              type="reset"
              variant="bordered"
              className="w-full bg-black text-white rounded-none"
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <Separator className="flex-1" />
          <div className="text-md text-gray-500 whitespace-nowrap">
            or login with
          </div>
          <Separator className="flex-1" />
        </div>

        {/* Google Login */}
        <div className="my-4">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 py-2 bg-black text-white rounded-md cursor-pointer hover:bg-gray-900 transition-all"
          >
            <FaGoogle />
            Sign in with Google
          </button>
        </div>

        {/* Signup */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Do not have an account?{" "}
          <Link href="/signup">
            <span className="text-black font-semibold cursor-pointer hover:underline">
              Register
            </span>
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LogIn;