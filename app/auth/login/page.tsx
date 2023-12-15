// Import the necessary dependencies
"use client"
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../media/Community-Dreams-Foundation-Hi-Res-Transparent-1.png';
import { FcGoogle, } from 'react-icons/fc';
import { FaTwitter, FaApple } from 'react-icons/fa';
import { login } from '@/redux/features/auth-slice';
import { RootState } from '../../../redux/store';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BACKEND_URL = process.env.BACKEND_URL as string;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create an object to send to the API with email and password
    const user = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch(`${BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast(errorData.message, { type: 'error' });
      } else {
        const userData = await response.json();
        console.log(userData);
        dispatch(login({ userInfo: userData }) as any);
        toast('Login successful!', { type: 'success' });
      }
    } catch (error) {
      toast('Something went wrong', { type: 'error' });
      console.error('An error occurred:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = window.open(`${BACKEND_URL}/auth/google`, '_self');
    } catch (error) {
      toast.error('Something went wrong');
      console.log(error);
    }
  };

  useEffect(() => {
    if (error) {
      toast(error, { type: 'error' });
    }
  }, [error]);

  return (
    <>
      <ToastContainer theme="light" />

      <main className="w-full flex com">
        <div className="relative flex-1 hidden items-center justify-center h-screen  lg:flex"></div>
        <div className="flex-1 flex items-center justify-center h-screen">
          <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
            <div className="">
              <Image
                className="h-10 w-auto"
                src={Logo}
                alt="NestSite Logo"
                width={179.8}
                height={78.9}
              />
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                  Log in
                </h3>
                <p className="">
                  Don't have an account?{' '}
                  <Link href="/signup">
                    <div className="font-medium text-indigo-600 hover:text-indigo-500">
                      Sign up
                    </div>
                  </Link>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-x-3">
              {/* Google Sign In */}
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100"
              >
                <FcGoogle className="w-5 h-5" />
              </button>
              {/* Twitter Sign In */}
              <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                <FaTwitter className="w-5 h-5" />
              </button>
              {/* Apple Sign In */}
              <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                <FaApple className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <span className="block w-full h-px bg-gray-300"></span>
              <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                Or continue with
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Email Input */}
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              {/* Password Input */}
              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-sm">
                  Remember me
                </label>
              </div>
              {/* Login Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-indigo-500 active:bg-green-600 rounded-lg duration-150"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
