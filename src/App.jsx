import React, { useState, useEffect } from "react";
import Me from "./assets/me.png";
import BG1 from "./assets/BS-5.png";
import BG2 from "./assets/room.png";
import BG3 from "./assets/spc-logo.png";
import BG4 from "./assets/icon.png";
import BG from "./assets/project-bg.png";
import { SiLinkedin, SiWhatsapp, SiGithub } from "react-icons/si";

const App = () => {
  const projects = [
    {
      image: BG1,
      name: "Bryanspaxe",
      description:
        "Simplified Procurement and Professional Installation of Automated Engineering Services.",
      path: "https://www.bryanspaxe.com/",
      repo: "https://github.com/Juliet-07/bryanspaxe",
    },
    {
      image: BG2,
      name: "Welcome Me",
      description: "House hunting made easy for you in Germany.",
      path: "https://welcome-me.vercel.app/",
      repo: "https://github.com/Juliet-07/welcome-me",
    },
    {
      image: BG3,
      name: "SPC Universe",
      description: "Building a Borderless World for Digital Innovators.",
      path: "https://www.silverspoonuniverse.com/",
      repo: "https://github.com/Juliet-07/spc-website",
    },
    {
      image: BG4,
      name: "ABH",
      description:
        "From conceptualization to execution, I thrive on the journey of shaping ideas",
      path: "https://abhmarkets.com/",
      repo: "https://github.com/Juliet-07/abh",
    },
  ];
  const experiences = [
    {
      number: "01",
      company: "PremiumTrust Bank (Nigeria)",
      date: "April 2022 - March 2024",
      description:
        "As a Senior Software Engineer, I built an intranet portal that improved operational efficiency by up to 70%. I also built portals for tax, revenue, and international trade transactions, which increased profitability. I managed CI/CD pipelines, deployed applications on in-house Linux servers, and ensured the seamless operation of these platforms.",
    },
    {
      number: "02",
      company: "Swap Space (Dubai)",
      date: "Oct 2023 - Dec 2023",
      description:
        "As a Lead Frontend Engineer, I led the development of a real estate platform, integrated API services, and provided weekly progress reports to senior management. I streamlined data flow for an enhanced customer experience and managed version control using Git.",
    },
    {
      number: "03",
      company: "Scaling Ventures (Berlin)",
      date: "Sept 2022 - Feb 2023",
      description:
        "Developed HSB, a secure tax management platform, and GuideMe, a tourist application. I ensured seamless deployments via AWS and DigitalOcean while managing digital channel activities.",
    },
    {
      number: "04",
      company: "Learnfactory Nigeria",
      date: "July 2019 - Dec 2020",
      description:
        "Over the span of my internship and full-time role, I developed mobile applications for Android and iOS using React Native. I optimized app performance by integrating custom modules and SDKs, and enhanced functionality through seamless API integration. Additionally, I gained experience in version control using GitHub while contributing to both frontend and backend communications",
    },
  ];
  const skills = [
    { id: 1, name: "HTML5" },
    { id: 2, name: "CSS3" },
    { id: 3, name: "TailwindCSS" },
    { id: 4, name: "Javascript" },
    { id: 5, name: "Typescript" },
    { id: 6, name: "React.js" },
    { id: 7, name: "Next.js" },
    { id: 8, name: "Node.js" },
    { id: 9, name: "NestJS" },
    { id: 10, name: "Databases" },
    { id: 11, name: "Git" },
    { id: 12, name: "Github" },
    { id: 13, name: "Project Management" },
  ];
  const [completedProjects, setCompletedProjects] = useState(0);
  const [liveProjects, setLiveProjects] = useState(0);
  const [happyUsers, setHappyUsers] = useState(0);

  // Function to increment values
  const incrementValue = (endValue, setValue) => {
    let startValue = 0;
    const duration = 2000; // Duration in ms
    const increment = Math.ceil(endValue / (duration / 50));

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        setValue(endValue);
        clearInterval(counter);
      } else {
        setValue(startValue);
      }
    }, 50); // Interval in ms
  };

  useEffect(() => {
    incrementValue(20, setCompletedProjects); // 20 Completed Projects
    incrementValue(20, setLiveProjects); // 20 Live Projects
    incrementValue(1000, setHappyUsers); // 1000 Happy Users
  }, []);

  return (
    <div className="w-full h-full text-white font-primaryRegular">
      {/* Top Bar */}
      <div className="w-full h-20 flex items-center justify-between px-4 fixed top-0 left-0 z-0">
        <div></div>
        <div className="flex space-x-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/juliet-kelechi-8126b8173/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin color=" #0077B5" size={20} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+2348147808902" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiWhatsapp color="#25D366" size={20} />
          </a>

          {/* Github */}
          <a
            href="https://github.com/Juliet-07" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub size={20} />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col md:flex-row items-stretch mt-20">
        {/* Sidebar */}
        <div className="md:w-[50%] w-full px-4 md:px-10 md:fixed">
          <div className="w-[205px] md:w-[225px] rounded-[32px] bg-[#D1FADF] text-[#027A48] text-sm md:text-base font-primarySemibold flex items-center justify-center p-1 md:p-2 my-4">
            Developer and more
          </div>
          <p className="text-3xl md:text-6xl font-primaryBold md:py-4">
            Juliet Kelechi
          </p>
          <p className="text-gray-400 text-md md:text-lg my-4">
            Turning bold ideas into impactful digital experiences.
          </p>

          {/* Desktop navigation */}
          <ul className="hidden md:grid mt-10 gap-4">
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#about">About me</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#achievements">Achievements</a>
            </li>
            {/* <li>
              <a href="#contact">Contact me</a>
            </li> */}
          </ul>
        </div>

        {/* Main Section */}
        <div className="md:w-[50%] w-full ml-auto relative mt-2 md:mt-0">
          {/* Fixed Background Image */}
          <div
            className="fixed w-full h-[387px] md:w-[746px] md:h-[666px] bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${Me})`, objectFit: "cover" }}
          ></div>
          20
          {/* Scrollable Content */}
          <div className="relative z-10 mt-[400px] md:mt-[700px] space-y-10 overflow-auto">
            {/* <section id="overview" className="bg-red-500">
              <h2 className="text-2xl font-primaryBold mb-2">Overview</h2>
              <p>Crafting products from inception to fruition is my forte...</p>
            </section> */}

            <section id="about" className="bg-[#101828] p-4 md:p-0">
              <h2 className="text-2xl text-[#667085] font-primaryBold mb-2 ">
                About me
              </h2>
              <p className="text-sm md:text-lg leading-10 text-gray-400">
                As a software engineer driven by innovation, I thrive on turning
                complex ideas into intuitive, impactful solutions.
                <br /> With expertise in the MERN stack and cloud technologies
                like Azure and AWS, I specialize in delivering high-performance,
                scalable products that propel businesses forward.
                <br /> My passion lies in crafting user-centric applications
                that streamline operations, enhance security, and provide
                lasting value.
                <br /> Whether collaborating with cross-functional teams or
                leading projects, I’m dedicated to making a tangible difference
                through technology. <br />
                Let's transform your vision into reality, one solution at a
                time!
              </p>
            </section>

            <section id="experience" className="bg-[#101828] p-4 md:p-0">
              <h2 className="text-2xl text-[#667085] font-primaryBold mb-2">
                Work Experience
              </h2>
              <div className="grid md:grid-cols-2 gap-5 md:gap-10 p-2 md:p-0">
                {experiences.map((experience, index) => (
                  <div className="grid gap-2">
                    <div className="text-gray-400 text-7xl md:text-8xl">
                      {experience.number}
                    </div>
                    <div className="text-white font-primarySemibold">
                      {experience.company}
                    </div>
                    <p className="text-xs md:text-sm text-gray-500">
                      {experience.date}
                    </p>
                    <div className="text-gray-400 text-sm md:text-base leading-7">
                      {experience.description}
                    </div>
                  </div>
                ))}
              </div>
              <p className="py-3">
                <a
                  href="https://drive.google.com/file/d/1MvYP95aqMQ8UX-xpxSPxmKrRBRCBa8-u/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  View Full Resume
                </a>
              </p>
            </section>

            <section id="project" className="bg-[#101828] p-4 md:p-0">
              <h2 className="text-2xl text-[#667085] font-primaryBold mb-2">
                Selected Project
              </h2>
              <div className="grid md:grid-cols-2 gap-5 py-2">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="relative w-full md:w-[320px] h-[329px] shadow-md rounded-xl overflow-hidden group hover:border-[2px] hover:border-green-500"
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }} // Use project.image
                    ></div>

                    {/* Content */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 group-hover:opacity-0">
                      <h3 className="text-white text-xl font-semibold">
                        {project.name}
                      </h3>
                      <p className="text-white text-sm md">
                        {project.description}
                      </p>
                    </div>

                    {/* Hover Button */}
                    <div className="absolute inset-0 flex justify-center items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.path}
                        target="_blank"
                        className="bg-green-600 text-white px-4 py-2 rounded-md"
                      >
                        Visit site
                      </a>
                      <a
                        href={project.repo}
                        target="_blank"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                      >
                        Visit repo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section id="skills" className="bg-[#101828] p-4 md:p-0">
              <h2 className="text-2xl text-[#667085] font-primaryBold mb-2">
                Professional Skills
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-0 md:p-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="w-full p-2 border-2 border-[#039855] rounded-lg text-center text-green-600"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </section>
            <section id="achievements" className="bg-[#101828] p-4 md:p-0">
              <h2 className="text-2xl text-[#667085] font-primaryBold mb-2">
                Something To Remember
              </h2>
              <div className="w-full flex items-center justify-between">
                <div>
                  <p className="text-[#039855] text-4xl md:text-6xl font-primaryBold">
                    {completedProjects}+
                  </p>
                  <p className="text-gray-400 text-sm md:text-xl">
                    Completed Projects
                  </p>
                </div>
                <div>
                  <p className="text-[#039855] text-4xl md:text-6xl font-primaryBold">
                    {liveProjects}+
                  </p>
                  <p className="text-gray-400 text-sm md:text-xl">
                    Live Projects
                  </p>
                </div>
                <div>
                  <p className="text-[#039855] text-4xl md:text-6xl font-primaryBold">
                    {happyUsers}+
                  </p>
                  <p className="text-gray-400 text-sm md:text-xl">
                    Happy Users
                  </p>
                </div>
              </div>
            </section>

            <section id="contact"></section>

            {/* <section id="contact" className="bg-yellow-500">
              <h2 className="text-2xl font-primaryBold mb-2">Contact me</h2>
              <p>Contact details...</p>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
