"use client"
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { setUser } from '@/redux/features/user-slice';
import { useDispatch } from 'react-redux';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    postalCode: '',
    userType: 'user',
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

   try{
    dispatch(setUser(formData));
    console.log('Form submitted:', formData);
    router.push('/dashboard');
   }catch(error){
    console.log(error)
   }
    
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:py-16 lg:flex-row lg:items-center lg:h-screen">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-full">
        
          <div className="flex justify-center lg:space-y-3 lg:flex-col lg:w-1/2 text-black">
          <h1 className="text-3xl font-semibold tracking-wide lg:text-4xl">Easy as 1-2-3</h1>
            <ol className="list-decimal lg:py-5 pl-6 mt-4">
              <li>Custom build profiles using machine learning for rapid identification and application of incentives</li>
              <br />
              <li>Streamlined transparent marketplace for energy-efficient and clean energy upgrades using AI communication</li>
              <br />
              <li>Gamified sustainable actions to unlock additional rewards and incentives</li>
            </ol>
          </div>

          <div className="flex items-center justify-center w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="max-w-lg w-full text-black">
              <h2 className="text-3xl font-semibold mb-4 sm:mt-8 md:mt-4 lg:text-4xl ">
                Get Started Now!
              </h2>
              <div className="mb-4 mt-4">
                <label htmlFor="username" className="block text-sm font-medium">
                  Username/Organization Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full bg-gray-200 border rounded-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full bg-gray-200 border rounded-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="postalCode" className="block text-sm font-medium">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full bg-gray-200 border rounded-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="userType" className="block text-sm font-medium">
                  User Type
                </label>
                <select
                  id="userType"
                  name="userType"
                  value={formData.userType}
                  onChange={handleInputChange}
                  className="mt-1 p-3 w-full bg-gray-200 border rounded-full"
                  required
                >
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-medium leading-5 text-white capitalize bg-yellow-500 rounded-lg hover:bg-yellow-400 focus:outline-none"
                >
                  Submit
                </button>
              </div>
              <div className="mt-8 text-center text-black">
                <p>
                  <span className="text-yellow-500 underline">Create your own free forms</span> to generate leads from your GitHub
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
