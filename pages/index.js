import { useState, useEffect } from 'react';
import { getAuthor } from '../services/index';

export default function Home() {
  const [author, setAuthor] = useState({});

  const loadAuthor = async () => {
    const result = await getAuthor();
    setAuthor(result);
  };

  useEffect(() => {
    loadAuthor();
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      {/* Create a simple clean hero section with a list of social icons at the end */}
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-center">
          Hi, I'm <span className="text-green-500">Dellan TM.</span>
        </h1>
        <p className="text-3xl text-center my-8">
          __<span className="text-green-500">Full Stack Engineer</span> from
          Cape Town__
        </p>
        <p className="text-center text-md lg:text-2xl lg:mx-20">{author.bio}</p>
        <div className="flex flex-row mt-8">
          <a
            href="https://www.linkedin.com/in/dellan-muchengapadare-2a2086157/"
            className="tooltip w-20 h-20 bg-white rounded-full flex items-center justify-center mr-4 border border-white hover:border-8 hover:border-blue-500"
          >
            <span className="tooltiptext">Linkedin Profile</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0e76a8"
              strokeWith="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://github.com/mactunechy"
            className="tooltip w-20 h-20 bg-white rounded-full flex items-center justify-center mr-4 border border-white hover:border-8 hover:border-black"
          >
            <span className="tooltiptext">Github</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWith="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="/blog"
            className="tooltip w-20 h-20 bg-white rounded-full flex items-center justify-center mr-4 border border-white hover:border-8 hover:border-green-500"
          >
            <span className="tooltiptext">My Blog</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10B981"
              strokeWith="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-book-open"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </a>
          <a
            href="/dellan-resume.pdf"
            className="tooltip w-20 h-20 bg-white rounded-full flex items-center justify-center mr-4 border border-white hover:border-8 hover:border-red-500"
          >
            <span className="tooltiptext">My Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e20909a8"
              strokeWith="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-briefcase"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
