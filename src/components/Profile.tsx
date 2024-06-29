import React, { ReactNode, useEffect, useState } from 'react';
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { RxDownload } from 'react-icons/rx';
import "../App.css"
import profileImg from "../../public/saransh.jpg"
import mvCV from "../../public/CV (Saransh Pachhai).pdf"
import Footer from './Footer';

// File name of the CV
const cvFileName = "CV (Saransh Pachhai).pdf";

// Component for the scroll-to-top button
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Function to handle scroll events and show/hide the button
    const handleScroll = () => {
        setIsVisible(window.scrollY > 300);
    };

    // Effect to add and remove scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // JSX for the scroll-to-top button
    return (
        <div className={`${isVisible ? 'fixed bottom-10 right-10' : 'hidden'} cursor-pointer transition-opacity duration-500`}>
            <FaArrowUp onClick={scrollToTop} className="text-5xl text-gray-500 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-300" />
        </div>
    );
};

// Interface for Accordion component props
interface AccordionProps {
    title: string;
    children: ReactNode;
}

// Accordion component
const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    // JSX for the Accordion component
    return (
        <div className="border-t">
            <button
                className="w-full text-left py-2 px-4 focus:outline-none AccordionTitle"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-bold text-gray-600 flex items-center">
                    <span className={`mr-2 transition-transform duration-500 transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}>&#9656;</span>
                    {title}
                </h3>
            </button>
            <div className={`transition-max-h duration-500 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};


// Interface for ProjectAccordionItem component props
interface ProjectAccordionItemProps {
    title: string;
    description: string;
}

// ProjectAccordionItem component
const ProjectAccordionItem: React.FC<ProjectAccordionItemProps> = ({ title, description }) => (
    <div className="mb-6">
        <h3 className="text-xl font-bold mb-2 text-[#9d8e6f]">{title}</h3>
        <p className="text-md">{description}</p>
    </div>
);

// Main Profile component
const Profile = () => {
    return (
        <div>
            {/* Header section */}
            <header className="bg-gray-800 text-white text-center py-4">
                <img className="rounded-full mx-auto w-24 h-24" src={profileImg} alt="Profile Picture" />
                <h1 className="text-3xl font-bold mt-4 mb-10 text-[#d3c6c6]">Saransh Pachhai</h1>

                {/* Download Resume section */}
                <div className="text-2xl flex items-center justify-center gap-2" style={{ marginBottom: '48px' }}>
                    {/* Specify the filename in the download attribute */}
                    <a href={mvCV} download={cvFileName} className="text-[#534e4e] flex items-center transition-all duration-300 ease-in-out bg-green-600 hover:bg-white hover:text-[#415858] rounded-full px-6 py-3">
                        Download CV
                        <RxDownload className="ml-2" />
                    </a>
                </div>
            </header>

            {/* Main content section */}
            <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-[-50px]">
                {/* About Me section */}
                <h2 className="text-3xl font-bold mb-6 text-teal-600 hover:bg-gray-200">About Me</h2>
                <p className="text-lg">
                    B.Sc. CSIT graduate and Full-stack Developer with a passion for crafting efficient and user-friendly web applications.
                    Proficient in JavaScript, React, Node, and TypeScript. Experienced in both frontend and backend development,
                    contributing to real-world projects that showcase my dedication to quality and innovation.
                </p>

                {/* Social Media section */}
                <h2 className="text-3xl font-bold mt-8 mb-6 text-teal-600">Social Media</h2>
                <div className="flex gap-4 text-2xl">
                    <a href="https://github.com/saransh619" target="_blank" className="text-black-500">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/saransh-pachhai-b01494134/" target="_blank" className="text-blue-500">
                        <FaLinkedin />
                    </a>
                </div>

                {/* Experience section */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold mb-4 text-teal-600">Experience</h2>

                    {/* Frontend Developer Intern */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2 text-[#3498db]">Frontend Developer Intern</h3>
                        <p className="text-sm text-gray-700">ITGlance, Tripureshwor | March 14, 2022 - June 14, 2022 (3 months)</p>
                        <ul className="list-disc pl-6">
                            <li>Contributed as a Frontend Developer Intern, focusing on the Job Portal System using React JS, Redux, and Context API hooks.</li>
                            <li>Utilized Tailwind CSS for a polished and efficient user interface.</li>
                        </ul>
                    </div>

                    {/* Backend Developer Intern */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2 text-[#3498db]">Backend Developer Intern</h3>
                        <p className="text-sm text-gray-700">Varosa Technology Pvt. Ltd., Sanepa, Lalitpur | September 19, 2023 - December 19, 2023 (3 months)</p>
                        <ul className="list-disc pl-6">
                            <li>Involved in Backend Development Internship, contributing to projects like GUMP (Genese Unified Mailing Platform) and CRM (Customer Relationship Management).</li>
                            <li>Worked on the FreeSMS project using Swagger, implementing basicAuth for enhanced security.</li>
                            <li>Understood the principles of serverless development and successfully created a Serverless Sequelize project for streamlined database management, utilizing Express, Sequelize, and Docker for simple deployment.</li>
                        </ul>
                    </div>

                    {/* Backend Developer */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2 text-[#3498db]">Jr. Backend Developer (Node JS)</h3>
                        <p className="text-sm text-gray-700">Inflancer Technology Pvt. Ltd., Gwarko, Lalitpur | February 2024 - Present</p>
                        <ul className="list-disc pl-6">
                            <li>Currently working as a Backend Developer, contributing to the Inflancer project available on iOS, Android, and web platforms.</li>
                            <li>Utilized TypeScript and Node.js for robust and efficient backend development.</li>
                            <li>Implemented image processing and optimization using Sharp, and video optimization with FFmpeg.</li>
                            <li>Leveraged Digital Ocean for scalable and reliable cloud infrastructure.</li>
                            <li>Designed and executed complex aggregation operations in MongoDB for efficient data handling and analysis.</li>
                        </ul>
                    </div>
                </div>

                {/* Projects section */}
                <h2 className="text-3xl font-bold mt-8 mb-6 text-teal-600">Projects</h2>

                {/* Inflancer Project */}
                <Accordion title="Inflancer Project">
                    <ProjectAccordionItem
                        title="Inflancer Project"
                        description="Currently contributing to the Inflancer project, available on iOS, Android, and web platforms. Developed backend features using TypeScript and Node.js, implemented image and video optimization with Sharp and FFmpeg, and utilized Digital Ocean for cloud infrastructure."
                    />
                </Accordion>

                {/* GUMP Project */}
                <Accordion title="GUMP Project">
                    <ProjectAccordionItem
                        title="GUMP (Genese Unified Mailing Platform)"
                        description="Developed GUMP as a Node.js backend developer. Implemented mass mailing features, including User Registry, Template Designer, Email Sanitization, and Campaign Configuration."
                    />
                </Accordion>

                {/* CRM System */}
                <Accordion title="CRM System">
                    <ProjectAccordionItem
                        title="CRM System"
                        description="Contributed to a Node.js-based CRM system using TypeScript. Improved customer interactions, leading to significant organizational growth. Managed customer relationships, tracked communication, and utilized data analytics for enhanced engagement."
                    />
                </Accordion>

                {/* FreeSMS Project */}
                <Accordion title="FreeSMS Project">
                    <ProjectAccordionItem
                        title="FreeSMS Project"
                        description="Contributed to the FreeSMS Project, a Node.js-based initiative. Implemented Basic Auth for enhanced security, ensuring a robust and secure messaging platform."
                    />
                </Accordion>

                {/* Serverless Sequelize Project */}
                <Accordion title="Serverless Sequelize Project">
                    <ProjectAccordionItem
                        title="Serverless Sequelize Project"
                        description="Built a project with Serverless Sequelize for seamless database management. Used Express and Sequelize with Serverless deployment, supporting multiple databases, organized in clear folders, and featuring Docker support for easy deployment."
                    />
                </Accordion>

                {/* Job Portal System */}
                <Accordion title="Job Portal System">
                    <ProjectAccordionItem
                        title="Job Portal System"
                        description="Implemented a Job Portal System with role-based authentication (Admin, Recruiter, Viewer) using React JS with Tailwind CSS. The backend was developed using the Java Spring Boot Framework, ensuring a secure and seamless user experience."
                    />
                </Accordion>

                {/* EverFund Project */}
                <Accordion title="EverFund Project">
                    <ProjectAccordionItem
                        title="EverFund Project"
                        description="Contributed to the EverFund Project, a real-world US-based initiative for charitable organizations. Employed pure code, Redux Thunk, and the Ant Design library in React for enhanced functionality and a user-friendly interface."
                    />
                </Accordion>

                {/* Tomato Leaf Disease Prediction System */}
                <Accordion title="Tomato Leaf Disease Prediction System">
                    <ProjectAccordionItem
                        title="Tomato Leaf Disease Prediction System"
                        description="Executed my college final year project, the Tomato Leaf Disease Prediction System, utilizing the CNN Machine Learning algorithm. Analyzed a comprehensive dataset of a thousand tomato leaf images from Kaggle for accurate disease predictions."
                    />
                </Accordion>

                {/* MERN Stack Project */}
                <Accordion title="MERN Stack Project">
                    <ProjectAccordionItem
                        title="MERN Stack Project"
                        description="Developed an advanced MERN Stack project, seamlessly connecting Frontend, Backend, and Database. Integrated Middlewares, NoSQL databases, and implemented secure login-based authentication using Tokens and cookies."
                    />
                </Accordion>

                {/* Technical Skills section */}
                <div className="mt-8 text-gray-600">
                    <h2 className="text-3xl font-bold mb-4 text-teal-600">Technical Skills</h2>

                    {/* Programming Languages */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Programming Languages</h3>
                        <p className="text-sm">JavaScript, React, Node, TypeScript, Java</p>
                    </div>

                    {/* Web Technologies */}
                    <div className="mt-3">
                        <h3 className="text-lg font-bold mb-2">Web Technologies</h3>
                        <p className="text-sm">Proficient in the MERN Stack (MongoDB, Express, React, Node) and containerization through Docker for efficient application deployment.</p>
                    </div>

                    {/* Database Management */}
                    <div className="mt-3">
                        <h3 className="text-lg font-bold mb-2">Database Management</h3>
                        <p className="text-sm">MongoDB (NoSQL), MySQL, PostgreSQL</p>
                    </div>

                    {/* APIs */}
                    <div className="mt-3">
                        <h3 className="text-lg font-bold mb-2">APIs</h3>
                        <p className="text-sm">Well-versed in REST and GraphQL for efficient communication between web services.</p>
                    </div>

                    {/* Miscellaneous */}
                    <div className="mt-3">
                        <h3 className="text-lg font-bold mb-2">Miscellaneous</h3>
                        <p className="text-sm">Python programming (Data Science)</p>
                    </div>

                    {/* Operating System */}
                    <div className="mt-3">
                        <h3 className="text-lg font-bold mb-2">Operating System</h3>
                        <p className="text-sm">Windows, Linux, MacOS</p>
                    </div>
                </div>

                {/* Scroll-to-top button */}
                <ScrollToTop />

            </section>

            {/* Footer section */}
            <Footer />
        </div>
    );
};

export default Profile;
