"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import icon from '../../media/b2974ac5-a6c9-465b-acae-a3eeadb66700.jpg'

interface OnboardingProps {
  username: string;
}

const Onboarding: React.FC<OnboardingProps> = ({ username }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleHomepageClick = () => {
    // Add logic for redirection or any other action
    router.push('/');
  };

  return (
    <>
      <div className="container flex mt-12 lg:mt-16 flex-col items-center justify-center  mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Congratulations Sarah , you're one step closer to your dream.
        </h1>

        {/* Image */}
        <Image
        src={icon}
        className="max-w-full h-auto m-4"
        alt="Onboarding Image"
        />
    

        <p className="text-gray-900 text-2xl text-center mb-8">
          We are gathering more details to provide you with the opportunities to get you started.
          We will be in touch with you shortly.
        </p>

        <div className="flex justify-end mb-3">
          <button
            onClick={handleHomepageClick}
            className={`px-6 py-3 text-sm font-medium leading-5 text-white bg-green-500 rounded-full ${
              isLoading && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={isLoading}
          >
            Homepage
          </button>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
