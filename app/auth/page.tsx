"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; // You may need to adjust the import based on your routing setup
import { HiOutlineMail } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
import Logo from '../../media/nest site favi con.png'


export default function Auth() {
  const router = useRouter();

  const handleEmailLogin = () => {
    router.push('/auth/login'); // Replace '/login' with the actual route for email login
  };

  const handleEmailSignup = () => {
    router.push('/auth/signup'); // Replace '/signup' with the actual route for email signup
  };

  const handleGoogleSignup = () => {
    // You can implement Google Sign Up logic here
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className='bg-white sm:mx-auto rounded-md sm:w-full sm:max-w-md flex flex-col  shadow-md p-3'>  
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center ">
        <div className="flex items-center">
          <Image
            className="h-12 w-auto"
            src={Logo}
            alt="NestSite Logo"
            width={179.8}
            height={78.9}
          />
          <div>
            <h2 className="text-4xl font-[900] leading-9 tracking-tight text-gray-900 heading">
              Get Started
            </h2>
          </div>
        </div>
        <p className="mt-2 text-center text-gray-900">
        We&apos;re excited to have you on board!😎
        </p>
      </div>    
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
        <p className="mt-2 text-center text-gray-600">
        Take a few moments to explore the various features our platform offers. You&apos;ll discover tools and functionalities designed to simplify your tasks and enhance your experience.🔥
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <button
            onClick={handleEmailLogin}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <HiOutlineMail className="w-5 h-5 mr-2" /> Login with Email
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={handleEmailSignup}
            className="flex w-full justify-center bg-purple-600 py-2 px-4 text-sm font-semibold leading-6 border border-purple-300 rounded-md text-white hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            style={{backgroundColor:"purple"}}
          >
            <HiOutlineMail className="w-5 h-5 mr-2" /> Sign Up with Email
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={handleGoogleSignup}
            className="flex w-full justify-center bg-white py-2 px-4 text-sm font-semibold leading-6 border border-gray-300 rounded-md text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <FcGoogle className="w-5 h-5 mr-2" /> Join with Google
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
