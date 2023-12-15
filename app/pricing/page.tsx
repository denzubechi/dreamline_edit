"use client"
import React, { useState } from 'react';
import { TbPointFilled } from 'react-icons/tb';
import Header from './component/header';
interface PricingData {
  title: string;
  description: string;
  price: string;
  duration:string;
  features: string[];
  mostPopular?: boolean;
}
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link }) => (
  <div className="inline-block px-3">
 
  <div className="minWidth-70 p-4 md:p-8 space-y-3 border-2 mr-2 border-indigo-400 dark:border-indigo-300 rounded-xl">
    <span className="inline-block text-blue-500 dark:text-blue-400">
      {icon}
    </span>

    <h1 className="text-xl md:text-xl font-semibold text-gray-700 capitalize dark:text-gray-800">{title}</h1>

    <p className="text-lg md:text-base text-gray-700 dark:text-gray-500">{description}</p>

    <a
      href={link}
      className="inline-flex p-2 text-indigo-500 capitalize text-sm md:text-base transition-colors duration-300 transform bg-indigo-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-indigo-600 dark:hover:text-indigo-500"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 text-indigo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </a>
  </div>
     
  </div>
);

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const pricingData: PricingData[] = [
    {
      title: 'Free',
      description: 'Great for getting started',
      price: '$0',
      duration:"$5",
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
      ],
    },
    {
      title: 'Basic',
      description: 'Great for getting started',
      price: '$7.99',
      duration:"$12.99",
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
      ],
    },
    {
      title: 'Pro',
      description: 'Best value for professionals',
      price: '$14.99',
      duration:"$20",
      features: [
        'All Basic features',
        'Feature 4',
        'Feature 5',
        'Feature 6',
        'Feature 7',
      ],
      mostPopular: true,
    },
    {
      title: 'Prime',
      description: 'Advanced features for experts',
      duration:"$50",
      price: '$29.99',
      features: [
        'All Pro features',
        'Feature 6',
        'Feature 7',
        'Feature 8',
        'Feature 9',
      ],
    },
  ];

  const selectPlan = (index: number) => {
    setSelectedPlan(index);
  };

  return (
    <>
    <Header/>
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-black" style={{background:"#F9F5FF"}}>
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Choose your plan to get started
          </h2>
          <p className="text-gray-500 mt-2">
            Select the best plan for you and unlock amazing features,grow your business,build your online presence.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" >
        {pricingData.map((tier, index) => (
  <div
    key={index}
    className={`p-6 border-0 rounded-3xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg pricing-cards hover:cursor-pointer`}
  >
    {tier.mostPopular && (
      <div className="absolute top-0 left-0 text-white py-1 px-2 rounded-tr-lg rounded-bl-lg -mt-1 -ml-1" style={{ justifyContent: "center", alignItems: "center", background: "#E6763F" }}>
        Most Popular
      </div>
    )}
    {selectedPlan === index && (
      <div className="absolute top-0 right-0 bg-indigo-600 rounded-full p-2 -mt-2 -mr-2">
        <TbPointFilled />
      </div>
    )}
    <h3 className="text-l font-semibold mb-2 text-center mt-2 text">{tier.title}</h3>
    <h1 className="text-4xl font-extrabold mb-4 text-center" style={{ fontWeight: 700 }}>{tier.price}</h1>
    <div className='text-center duration'  style={{
        background: 'inherit'
      }}><del>{tier.duration}</del></div>
          <hr className=" my-5" />
    <p className=" mb-4 text-center">{tier.description}</p>
    <ul className="space-y-2">
      {tier.features.map((feature, i) => (
        <li key={i} className="flex items-center text">
          <TbPointFilled className="text-indigo-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <button
      onClick={() => selectPlan(index)}
      className={`w-full mt-6 py-3 px-4 rounded-md border-0 text-gray-300 hover:bg-indigo-600 border border-indigo-200 hover:text-white ${
        selectedPlan === index
          ? 'opacity-70 cursor-not-allowed'
          : ''
      }`}
    
      disabled={selectedPlan === index}
    >
      {selectedPlan === index ? 'Selected' : 'Select'}
    </button>
  </div>
))}

        </div>
{/**
        <div className="max-w-lg mx-auto text-center mt-20">
          <h2 className="text-2xl font-semibold">
          Features you’ll enjoy on all paid plans
          </h2>
          <div className="mt-10 flex justify-between">
              <div className='font-semibold text-gray-700'>
              <Image 
                className="h-13 w-auto" 
                src={Portfolio} 
                alt="Portfolio"
                width={160.8} 
                height={60.9} />
                Portfolio Showcase
              </div>
            <div className='text-1xl font-semibold text-gray-700'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <rect width="80" height="80" rx="40" fill="#E5D1FE"/>
                <path d="M43.7997 45.6505H45.8119V49.675H35.0796V45.6505H37.0919V46.3213H38.4334V45.6505H42.458V46.3213H43.7994V45.6505H43.7997ZM45.8119 42.2966V44.9797H35.0796V42.2966H38.4335V40.2843H42.4581V42.2966H45.8119ZM39.2719 42.2966H41.6196V41.1228H39.2719V42.2966ZM27 34.1497C27 35.6094 28.0271 36.8498 29.3477 37.3059V51.6506H27V53.5714H53.8916V51.6506H51.5439V37.3035C52.9194 36.8825 53.8594 35.6606 53.8916 34.1497V33.296H27V34.1497ZM33.7538 34.08C33.7538 34.7711 34.4747 37.4382 37.1395 37.4382C39.454 37.4382 40.4692 35.345 40.4692 34.08C40.4692 35.2593 41.2599 37.4357 43.8268 37.4357C46.1459 37.4357 47.1736 35.1949 47.1736 34.08C47.1736 35.6193 48.2115 36.8989 49.6231 37.2978V51.6506H31.2685V37.3078C32.6987 36.9206 33.7538 35.6325 33.7538 34.08ZM50.5655 29.1343H50.5835V27H30.4148V29.1343L27 32.5491H53.8916L50.5655 29.1343Z" fill="#6E0BF0"/>
                </svg>
              Online Storefront
            </div>
            <div className='font-semibold text-gray-700'>
            <Image 
                className="h-13 w-auto" 
                src={Theme} 
                alt="Theme"
                width={160.8} 
                height={60.9} />
              Free Themes
            </div>
          </div>
        </div> */}
      </div>

    </div>
 {/**
    <div className="bg-white m-auto p-auto">
  <h1 className="py-5 md:px-10 px-5 md:mx-20 mx-5 font-bold text-xl md:text-4xl text-gray-800">
    Enjoy these features on all of the above plans
  </h1>
  <div className="flex overflow-x-auto pb-5 md:pb-10 ">
    <div className=" md:w-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 md:ml-10">
      <FeatureCard
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        }
        title="Easy to customizations"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        link="#"
      />
      <FeatureCard
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        }
        title="24/7 support"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        link="#"
      />
      <FeatureCard
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        }
        title="Online Storefront"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        link="#"
      />
      <FeatureCard
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 0111 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        }
        title="Free Themes"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        link="#"
      />
    
    </div>
  </div>
</div>

 */}




    </>
  );
};

export default Pricing;
