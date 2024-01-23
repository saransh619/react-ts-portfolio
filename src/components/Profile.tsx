import React, { ReactNode, useEffect, useState } from 'react';
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { RxDownload } from 'react-icons/rx';

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
            <FaArrowUp onClick={scrollToTop} className="text-3xl text-gray-500 hover:text-gray-700" />
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
                className="w-full text-left py-2 px-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-lg font-bold text-gray-600 flex items-center">
                    <span className="mr-2">&#9656;</span>
                    {title}
                </h2>
            </button>
            {isOpen && <div className="p-4">{children}</div>}
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

// Footer component
const Footer = () => (
    <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Saransh Pachhai. All rights reserved.</p>
    </footer>
);

// Main Profile component
const Profile = () => {
    return (
        <div>
            {/* Header section */}
            <header className="bg-gray-800 text-white text-center py-4">
                <img className="rounded-full mx-auto w-24 h-24" src="./public/naruto.jpg" alt="Profile Picture" />
                <h1 className="text-3xl font-bold mt-4 mb-10 text-[#a2a5a7]">Saransh Pachhai</h1>

                {/* Download Resume section */}
                <div className="text-2xl flex items-center justify-center gap-2" style={{ marginBottom: '48px' }}>
                    <a href="./public/demo.pdf" download className="text-gray-400 flex items-center">
                        <RxDownload />
                        Download Resume
                    </a>
                </div>
            </header>

            {/* Main content section */}
            <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md mt-[-50px]">
                {/* About Me section */}
                <h2 className="text-3xl font-bold mb-6 text-teal-600">About Me</h2>
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
                </div>

                {/* Projects section */}
                <h2 className="text-3xl font-bold mt-8 mb-6 text-teal-600">Projects</h2>

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
                        <p className="text-sm">Windows, Linux</p>
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
