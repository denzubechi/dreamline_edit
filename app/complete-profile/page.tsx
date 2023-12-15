// Import the necessary dependencies
"use client"
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Logo from '../../../media/Community-Dreams-Foundation-Hi-Res-Transparent-1.png';
import { FaTwitter, FaApple } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BACKEND_URL = process.env.BACKEND_URL as string;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Profile() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    birthdate: '',
    gender: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: '',
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    // Create an object to send to the API with profile information
    const profileData = {
      birthdate: formData.birthdate,
      gender: formData.gender,
      address: formData.address,
    };

    try {
      const response = await fetch(`${BACKEND_URL}/auth/update-profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast(errorData.message, { type: 'error' });
      } else {
        const updatedUserData = await response.json();
        console.log(updatedUserData);
        toast('Profile updated successfully!', { type: 'success' });
      }
    } catch (error) {
      toast('Something went wrong', { type: 'error' });
      console.error('An error occurred:', error);
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
          <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-2 cardd">
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
                  Complete Your Profile
                </h3>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Birthdate Input */}
              <div>
                <label className="font-medium">Birthdate</label>
                <input
                  type="date"
                  name="birthdate"
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              {/* Gender Radio Buttons */}
              <div>
                <label className="font-medium block">Gender</label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="other"
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
              </div>
              {/* Address Form */}
              <div>
                <label className="font-medium block">Address</label>
                <div className="space-y-2">
                  <input
                    type="text"
                    name="street"
                    onChange={handleAddressChange}
                    required
                    placeholder="Street"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                  <input
                    type="text"
                    name="city"
                    onChange={handleAddressChange}
                    required
                    placeholder="City"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                  <input
                    type="text"
                    name="state"
                    onChange={handleAddressChange}
                    required
                    placeholder="State"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                  <input
                    type="text"
                    name="zip"
                    onChange={handleAddressChange}
                    required
                    placeholder="ZIP Code"
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
              </div>
              {/* Update Profile Button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-indigo-500 active:bg-green-600 rounded-lg duration-150"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
