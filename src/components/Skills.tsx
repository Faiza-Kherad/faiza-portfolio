import React from 'react';

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 
    'Python', 'Git', 'GitHub', 'Canva', 'Bootstrap'
  ];

  return (
    <div className='min-h-[60vh] p-4 md:pl-12'>
      <p className="text-2xl md:text-3xl font-extrabold my-6 md:my-12">Skills</p>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <button 
            key={index} 
            className='text-pink-600 border rounded-lg px-5 py-2 border-pink-600 hover:bg-pink-600 hover:text-white'
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
