import Image from 'next/image';

const Hero = () => {

  return (
    <div className='h-[80vh] flex flex-col-reverse md:flex-row items-center md:pl-12 md:pt-40 p-4'>
      <div className="left-side w-full md:w-[50%] text-center md:text-left">
        <h1 className='font-extrabold text-4xl md:text-5xl my-6 md:my-12'>
          Hey! I am <span className='text-pink-600'>Faiza</span>
        </h1>
        <p className='text-base md:text-lg'>
          I am a 12 years old passionate web developer crafting clean and responsive websites. 
          Currently exploring Next.js and UI design to elevate user experiences.
        </p>
      </div>
      <div className='right-side w-full md:w-[50%] flex justify-center md:justify-end'>
        <Image 
          className="mx-auto md:mx-0" 
          src="/hero-image.png" 
          width={300} 
          height={300} 
          alt="my portfolio picture" 
        />
      </div>
    </div>
  );
};

export default Hero;
