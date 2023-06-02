import React from 'react';
import ReactIMG from 'public/react-js-logo.png';
import JavaIMG from 'public/java.png';
import CppIMG from 'public/c-plus-plus.png';
import PythonIMG from 'public/python-logo.png';
import HtmlIMG from 'public/html (1).png';
import Image, { StaticImageData } from 'next/image';
import javascriptIMG from 'public/javascript-logo.png';
import cssIMG from 'public/css3.png';
import tailwindIMG from 'public/Tailwind_CSS_Logo.svg.png'

interface LanguageCardProps {
  title: string;
  image: StaticImageData;
}

function SecondPage() {
    return (
      <div>
        <main className="px-4">
          <div className="text-center shadow-2xl p-6 rounded-xl mb-40 mt-24 dark:bg-white flex flex-1 mx-auto flex-col">
            <h1 className="text-2xl md:text-4xl py-1 pb-8">Programming Languages</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <LanguageCard title="Java" image={JavaIMG} />
              <LanguageCard title="C++" image={CppIMG} />
              <LanguageCard title="Python" image={PythonIMG} />
              <LanguageCard title="React" image={ReactIMG} />
              <LanguageCard title="HTML" image={HtmlIMG} />
              <LanguageCard title="CSS" image={cssIMG} />
              <LanguageCard title="JavaScript" image={javascriptIMG} />
              <LanguageCard title="TailWind" image={tailwindIMG} />
            </div>
          </div>
        </main>
      </div>
    );
  }
  
function LanguageCard({ title, image }: LanguageCardProps) {
    return (
      <div className="flex flex-col items-center justify-center shadow-md rounded-lg hover:scale-105 transition-transform duration-200 ease-in p-4">
        <h2 className="text-base md:text-xl leading-6 py-2 flex-grow">{title}</h2>
        <div className="w-24 sm:w-36">
          <Image src={image} alt={`${title} Image`} layout="responsive" width={150} height={150} />
        </div>
      </div>
    );
  }
  
  

export default SecondPage;
