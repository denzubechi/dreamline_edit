"use client"
import React, { FormEvent, useState, useEffect } from 'react';
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
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [formRendered, setFormRendered] = useState(false); // New state variable

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

    if (!scriptLoaded && !formRendered) {
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
        setScriptLoaded(true);
        setFormRendered(true); // Update the state to indicate that the form has been rendered
      };

      return () => {
        // Cleanup: remove the script from the head when the component is unmounted
        document.head.removeChild(script);
        console.log('cleanup function called');
      };
    }
  }, [scriptLoaded, formRendered]); // Run the effect only when scriptLoaded or formRendered changes

  return (
    <>
      {/* Your JSX content */}
    </>
  );
};

export default Hero;
