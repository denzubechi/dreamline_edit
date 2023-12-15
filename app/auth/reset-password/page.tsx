"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { HiOutlineLockClosed } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../../media/nest site favi con.png'


const BACKEND_URL = process.env.BACKEND_URL as string;

const ResetPassword: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const resetToken = searchParams.get('resetToken');

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords don't match. Please try again.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (!resetToken || Array.isArray(resetToken)) {
        toast.error('Invalid or missing reset token.');
        setIsSubmitting(false);
        return;
      }

      const response = await fetch(`${BACKEND_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resetToken, password }),
      });

      if (response.status === 200) {
        toast.success('Password reset successfully.');
        router.push('/auth/login');
      } else if (response.status === 400) {
        toast.error('Invalid or expired reset token.');
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending request:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer theme="light" />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className='bg-white sm:mx-auto rounded-md sm:w-full sm:max-w-md flex flex-col  shadow-md p-3'>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex items-center">
        <Image
            className="h-12 w-auto"
            src={Logo}
            alt="NestSite Logo"
            width={179.8}
            height={78.9}
          />
          <h2 className="text-2xl font-bold leading-9 text-gray-900">
            Set New Password
          </h2>
        </div>
          <p className="mt-2 text-gray-600">
            Enter your new password to complete your password reset.
          </p>
          <form className="space-y-10 mt-9 mb-9" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                New Password:
              </label>
              <div className="mt-2">
                <div className="flex items-center border rounded-md border-gray-300 py-1.5 pl-3 pr-2 text-gray-900 shadow-sm focus-within:ring-2 focus-within:ring-indigo-600 sm:text-sm sm:leading-6">
                <HiOutlineLockClosed className="w-6 h-6 mr-2 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="w-full focus:outline-none placeholder:text-gray-400"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password:
              </label>
              <div className="mt-2">
                <div className="flex items-center border rounded-md border-gray-300 py-1.5 pl-3 pr-2 text-gray-900 shadow-sm focus-within:ring-2 focus-within:ring-indigo-600 sm:text-sm sm:leading-6">
                <HiOutlineLockClosed className="w-6 h-6 mr-2 text-gray-400" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="w-full focus:outline-none placeholder:text-gray-400"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
                  ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex justify-center items-center">
                    <div className="animate-spin mr-2">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        className="text-white border-t-2 border-b-2 border-indigo-500 border-solid rounded-full"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    Submitting...
                  </div>
                ) : (
                  'Save'
                )}
              </button>
            </div>
          </form>
        </div>
        
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
