"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import the necessary dependencies for routing

export default function GoogleAccountErrorPage() {

  const router = useRouter()
  useEffect(() => {
    // Use the useEffect hook to perform the redirect after rendering the error page
    setTimeout(() => {
      router.push('/auth/login'); // Redirect to the login page after a delay (you can adjust the delay time)
    }, 3000); // Redirect after 3 seconds (adjust the time as needed)
  }, [router]);

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">Error</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Google Account Login Error
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, you cannot use this Google account to log in as it has a password associated with it.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/login" // Provide a link to the login page
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
