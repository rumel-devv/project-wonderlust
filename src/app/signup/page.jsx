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
import { FaGoogle } from "react-icons/fa6";

const SignUp = () => {

  const router = useRouter()

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries())
    const { name, email, image, password } = user;
    const { data, error } = await authClient.signUp.email({
    name,
    email,
    image,
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
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join Wonderlust and start your next adventure.
          </p>
        </div>

        {/* Form */}
        <Form onSubmit={handleForm} className="flex flex-col gap-5">
          
          {/* Name */}
          <TextField isRequired name="name" type="text">
            <Label>Full Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>

          {/* Email */}
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>

          {/* Image URL */}
          <TextField name="image" type="text">
            <Label>Profile Image URL</Label>
            <Input placeholder="https://example.com/photo.jpg" />
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
              Create Account
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
        <div>
          <button  className="w-full bg-black text-white rounded-none">
          <FaGoogle/>  Sign in with google
          </button>
        </div>
        {/* Login */}
        
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href='/login'>
          <span className="text-black font-semibold cursor-pointer hover:underline">
            Login
          </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;