"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LogIn = () => {

  const router = useRouter()

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries())
    const { email,password } = user;
    const { data, error } = await authClient.signIn.email({
    email,
    password
});

if(data){
  router.push('/')
}

if(error){
  alert('Eroro aisa');
}


  }

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
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
          >
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

        {/* Login */}
        
        <p className="text-sm text-center text-gray-500 mt-6">
         Do not  have an account?{" "}
          <Link href='/signup'>
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