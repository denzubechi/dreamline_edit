"use client"
import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BACKEND_URL = process.env.BACKEND_URL as string;

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        toast.success('Password reset email sent. Check your email for instructions.');
        setCountdown(60);
      } else if (response.status === 401) {
        toast.error('Email not found. Please check your email address.');
      } else {
        toast('An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending request:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resendEmailAction = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/auth/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        toast.success('Password reset email resent. Check your email for instructions.');
        setCountdown(60);
      } else if (response.status === 401) {
        toast.error('Email not found. Please check your email address.');
      } else {
        toast('An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending request:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (countdown === null || countdown <= 0) {
      setCountdown(null);
    } else {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, setCountdown]);

  const buttonLabel = isSubmitting
    ? 'Submitting...'
    : countdown
    ? `Resend in (${countdown})`
    : 'Reset Password';

  const handleButtonAction = async () => {

    if(!email){
      toast.error("Please input an email address")
      return
    }
    if (isSubmitting || (countdown !== null && countdown > 0)) {
      return;
    }

    if (countdown === null || countdown === 0) {
      // Resend action
      await resendEmailAction();
    }
  };

  return (
    <>
      <ToastContainer style={{fontFamily: "'CW BR Firma', sans-serif"}} theme="light" />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className='bg-white sm:mx-auto rounded-md sm:w-full sm:max-w-md flex flex-col  shadow-md p-3'>

       
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/auth/login" className="flex items-center text-indigo-600 hover-text-indigo-500">
            <FiArrowLeft className="w-4 h-4 mr-1" />
            Back to Sign In
          </Link>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 text-gray-900">
            Forgot Your Password? 😢
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Don&apos;t worry! It happens to the best of us. If you&apos;ve forgotten your password, we&apos;ve got you covered.
            Provide the email address associated with your account below. We&apos;ll send you a secure link to reset your password.
          </p>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <div className="flex items-center border rounded-md border-gray-300 py-1.5 pl-3 pr-2 text-gray-900 shadow-sm focus-within-ring-2 focus-within-ring-indigo-600 sm-text-sm sm-leading-6">
                  <HiOutlineMail className="w-6 h-6 mr-2 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full focus:outline-none placeholder:text-gray-400"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
            </div>
            <div>
          <button
          type='submit'
          onClick={handleButtonAction}
          className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
            ${isSubmitting || (countdown !== null && countdown > 0) ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover-bg-indigo-500'}`}
          disabled={isSubmitting || (countdown !== null && countdown > 0)}
        >
          {buttonLabel}
        </button>
          </div>
          </form>
        
        </div>
       
        <p className="mt-6 text-center text-sm text-gray-500">
          Remember your password?{' '}
          <Link href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover-text-indigo-500">
            Sign In
          </Link>
        </p>
      </div>
      </div>
    </>
  );
};

export default ForgotPassword;


