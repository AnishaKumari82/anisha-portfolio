import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Certificates,
  StarsCanvas,
  Education,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          {/* <div className="flex justify-center my-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#452788] to-[#7a47e0] text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-purple-600 hover:scale-105 transition-all duration-300"
            >
              View Resume
            </a>
          </div> */}

           <div className="flex justify-center gap-4 my-6 flex-wrap">
  {/* Resume Button */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r from-[#452788] to-[#7a47e0] text-white px-6 py-3 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-purple-600 hover:scale-105 transition-all duration-300"
  >
    View Resume
  </a>

  {/* LinkedIn Button */}
  <a
    href="https://www.linkedin.com/in/anisha-kumari82"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.4 8h4.2V24H.4V8zm7.56 0h4.02v2.16h.06c.56-1.06 1.94-2.16 3.98-2.16 4.26 0 5.04 2.8 5.04 6.44V24H16.4v-7.84c0-1.86-.04-4.24-2.58-4.24-2.58 0-2.98 2.02-2.98 4.1V24H7.96V8z" />
    </svg>
    LinkedIn
  </a>

  {/* GitHub Button */}
  <a
    href="https://github.com/AnishaKumari82"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-2xl font-semibold text-lg shadow-xl hover:bg-gray-900 hover:scale-105 transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.26.79-.57 0-.28-.01-1.02-.02-2.01-3.2.69-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.67 1.23 3.32.94.1-.74.4-1.23.73-1.51-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.98 10.98 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.81 1.18 1.85 1.18 3.11 0 4.44-2.69 5.41-5.25 5.69.41.35.77 1.03.77 2.07 0 1.5-.01 2.71-.01 3.08 0 .32.21.68.8.56C20.71 21.43 24 17.12 24 12.02 24 5.73 18.77.5 12 .5z" />
    </svg>
    GitHub
  </a>
</div>

</div>

        <About />
        <Education />

        <Tech />
        <Works />

        <Experience />
        <Certificates />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
