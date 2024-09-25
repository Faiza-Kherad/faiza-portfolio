import React from 'react';
import { FaLinkedin, FaFacebookF, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const Contact = () => {
  return (
    
    <div className="min-h-[90vh] p-4 md:pl-12  text-white">
      <Navbar/>
      <p className="text-2xl md:text-3xl font-extrabold mb-6">Contact Me</p>
      <input 
        type="text" 
        placeholder="Enter your name" 
        className="my-4 border rounded-lg px-4 md:px-8 py-2 w-full md:w-96 bg-transparent" 
      />
      <br />
      <textarea 
        cols={40} 
        rows={10} 
        className="border rounded-lg px-4 md:px-8 py-2 mb-6 w-full md:w-96 bg-transparent" 
        placeholder="Write your message here..."
      ></textarea>
      <br />
      <button className="text-white bg-pink-600 hover:bg-pink-700 rounded-lg px-8 py-2 mb-6">
        Send
      </button>
      <p className="text-md text-slate-300 mb-4">Connect with me on:</p>
      <div className="icons flex gap-4">
        <Link href="https://www.linkedin.com/in/faiza-kherad-4a17752b4/">
          <FaLinkedin className="text-2xl hover:text-pink-600 hover:cursor-pointer" />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=61562315993245">
          <FaFacebookF className="text-2xl hover:text-pink-600 hover:cursor-pointer" />
        </Link>
        <Link href="https://github.com/Faiza-Kherad">
          <FaGithub className="text-2xl hover:text-pink-600 hover:cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
