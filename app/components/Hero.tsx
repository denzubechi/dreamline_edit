"use client"
import React, { FormEvent, useState, useEffect } from 'react';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { setUser } from '@/redux/features/user-slice';
import { useDispatch } from 'react-redux';

interface FormData {
  username: string;
  email: string;
  postalCode: string;
  userType: string;
}
// ... (imports)

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const scriptLoadedRef = useRef(false);

  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    postalCode: '',
    userType: 'user',
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    try {
      dispatch(setUser(formData));
      console.log('Form submitted:', formData);
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    console.log('useEffect is running');

    if (!scriptLoadedRef.current) {
      const script = document.createElement('script');
      script.charset = 'utf-8';
      script.type = 'text/javascript';
      script.src = '//js.hsforms.net/forms/embed/v2.js';

      document.head.appendChild(script);

      script.onload = () => {
        // HubSpot Forms script is loaded, create the form
        const windowWithHbspt = window as Window & typeof globalThis & { hbspt: any };
        if (windowWithHbspt.hbspt) {
          windowWithHbspt.hbspt.forms.create({
            region: 'na1',
            portalId: '44645585',
            formId: 'e7e12fdc-5c79-4381-ae4c-64e9585704e2',
          });
        }
        scriptLoadedRef.current = true;
      };

      return () => {
        // Cleanup: remove the script from the head when the component is unmounted
        if (script.parentNode) {
          script.parentNode.removeChild(script);
          console.log('cleanup function called');
        }
      };
    }
  }, []); // Run the effect only once on mount

  return (
    <>
      {/* Your JSX content */}
    </>
  );
};

export default Hero;
