import React from 'react';
import Link from 'next/link'

const Header = () => {
  return (
   <Link href="/welcome">
     <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-3xl p-4 mx-auto bg-white rounded-lg shadow-2xl ">
        <div className="flex items-center justify-end">
          {/* Move the X icon to the top right */}
          <div className="rounded-full border border-blue-500 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div className="mt-2">
          <h1 className="text-2xl font-bold text-black  hover:underline">
            Did you Know?
          </h1>
          {/* Replace "Design" with your content */}
          <p className="mt-2 text-black dark:text-gray-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam
            aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus
            delectus nihil quis facere in modi ratione libero! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam
            aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus
            delectus nihil quis facere in modi ratione libero!
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          {/* Remove "Read More" and avatar */}
        </div>
      </div>
    </div>
   </Link>
  );
};

export default Header;
