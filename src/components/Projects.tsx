import Link from "next/link";

const projects = [
  {
    title: "Calculator",
    image: "/calculator.png",
    link: "https://github.com/Faiza-Kherad/projects/tree/main/CLI%20Mini%20Calculator"
  },
  {
    title: "Word Counter",
    image: "/word-counter.png",
    link: "https://github.com/Faiza-Kherad/projects/tree/main/word-counter"
  },
  {
    title: "Currency Converter",
    image: "/currency-converter.png",
    link: "https://github.com/Faiza-Kherad/projects/tree/main/currency-converter"
  },
  {
    title: "ATM Machine",
    image: "/ATM-Machine.png",
    link: "https://github.com/Faiza-Kherad/projects/tree/main/ATM%20machine"
  },
  {
    title: "Todo List",
    image: "/Todo-List.png",
    link: "https://github.com/Faiza-Kherad/projects/tree/main/to%20do%20list"
  },
  {
    title: "Student Management System",
    image: "/management-sys.png",
    link: "https://github.com/Faiza-Kherad/projects/tree/main/Student-Management-System"
  },
  {
    title: "Adventure Game",
    image: "/AdVENTURE.png",
    link: "https://github.com/Faiza-Kherad/projects/tree/main/adventure-game"
  }
];

const Projects = () => {
  return (
    <div className="min-h-[80vh] p-4">
      <div className="pl-0 md:pl-12">
        <p className="text-2xl md:text-3xl font-extrabold mb-8 md:mb-12">Projects</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div key={index} className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%] p-4">
            <p className="text-lg font-bold mb-2">{project.title}</p>
            <Link href={project.link}>
              <img className="rounded-lg" src={project.image} alt={project.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
