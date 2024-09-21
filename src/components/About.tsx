import React from 'react';

const About = () => {
  return (
    <div className='min-h-[90vh] p-4 md:pl-12'>
      <p className='text-2xl md:text-3xl font-extrabold my-4 md:my-6'>About me</p>
      <p className='w-full md:w-[75%] lg:w-[50%] text-base md:text-lg'>
        Hi there! I am a web developer with a passion for building websites that are both functional and visually appealing. 
        My skills include HTML, CSS, JavaScript, TypeScript, and Tailwind CSS. I am currently diving into Next.js and UI design 
        to take my projects to the next level.
        <br /><br />
        Beyond coding, I have a strong interest in reading science-related books and exploring the world of mathematics. 
        These interests fuel my curiosity and inspire me to approach problems with a logical and creative mindset.
        <br /><br />
        I am always excited to learn new things and apply them to my work, whether it is a personal project or a collaborative effort. 
        I am driven by the challenge of creating seamless user experiences and bringing ideas to life through code.
      </p>
    </div>
  );
};

export default About;
