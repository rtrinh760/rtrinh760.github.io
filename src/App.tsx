import "./App.css";

function App() {
  return (
    <>
      <div className="overflow-auto overscroll-y-none">
        <div className="flex justify-center bg-[#242424]">
          <div className="min-h-screen w-3/4 sm:w-3/5 flex flex-col text-white">
            <nav className="p-6 md:pr-10 font-semibold text-base flex justify-center sm:text-lg md:text-xl lg:justify-end">
              <ul className="flex md:space-x-4">
                <li className="px-1 py-4 sm:px-4">
                  <a
                    href="https://linkedin.com/in/rtrinh760"
                    target="_blank"
                    className="flex items-center space-x-2"
                  >
                    <svg className="fill-white" width="24" height="24">
                      <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
                    </svg>
                    <p>LinkedIn</p>
                  </a>
                </li>
                <li className="px-1 py-4 sm:px-4">
                  <a
                    href="https://github.com/rtrinh760"
                    target="_blank"
                    className="flex items-center space-x-2"
                  >
                    <svg className="fill-white" width="24" height="24">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    <p>GitHub</p>
                  </a>
                </li>
                <li className="px-1 py-4 sm:px-4">
                  <a
                    href="mailto:richardtrinh452@gmail.com"
                    className="flex items-center space-x-2"
                  >
                    <svg className="fill-white" width="24" height="24">
                      <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z" />
                    </svg>
                    <p>Email</p>
                  </a>
                </li>
                <li className="px-1 py-4 sm:px-4">
                  <a
                    href="https://rtrinh760.github.io/portfolio/Richard_Trinh_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <svg
                      className="fill-white"
                      width="24"
                      height="24"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path d="M22 0H2v24h14l6-6V0zm-7 23H3V1h18v16h-6v6zm1-5h4.586L16 22.586V18zm-3 1H5v1h8v-1zm0-3H5v1h8v-1zm6-2v-1H5v1h14zm0-4h-4v1h4v-1zm-6.006 1H5.003L5 10.211c-.003-.72-.006-1.615 1.314-1.92 1.483-.341 1.236-.418 1.158-.563-1.078-1.988-.71-3.173-.395-3.703C7.465 3.374 8.166 3 9 3c.827 0 1.523.368 1.91 1.011.545.904.409 2.222-.379 3.713-.105.196-.195.255 1.119.559 1.355.312 1.352 1.212 1.35 1.936l-.006.781zM6 10h6c-.007-.547-.07-.626-.54-.734-.855-.198-1.629-.376-1.901-.972-.142-.311-.113-.66.087-1.039.61-1.151.758-2.146.407-2.729C9.777 4.068 9.275 4 9 4c-.48 0-.857.19-1.063.537-.352.59-.201 1.58.414 2.714.204.377.236.727.095 1.039-.269.598-1.036.774-1.847.962-.525.121-.593.202-.599.748zm13-2V7h-4v1h4zm0-4h-4v1h4V4z" />
                    </svg>
                    <p>Resume</p>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col justify-center md:justify-start lg:ml-20 mt-5">
              <h1 className="font-bold text-3xl md:text-4xl">Richard Trinh</h1>
              <h2 className="text-xl md:text-2xl">
                <span className="highlight highlight-[#636363]">
                  CS Student @ Colby College
                </span>
              </h2>
              <p className="mt-6 text-xl">
                Developer/learner/robot-enthusiast looking to bring efficient experiences to the web.
              </p>
              <h2 className="font-bold py-6 text-xl md:text-2xl">Experience</h2>
              <div className="text-xl space-y-4">
                <p>
                  <a
                    href="https://www.terracon.com/"
                    target="_blank"
                    className="transition duration-200 ease-in-out underline underline-offset-1 decoration-indigo-700 hover:decoration-white decoration-2 transform"
                  >
                    Terracon
                  </a>
                  {" - "}
                  Software Engineer Intern (Summer 2023)
                </p>
                <p>
                  <a
                    href="https://www.cs.colby.edu/"
                    target="_blank"
                    className="transition duration-200 ease-in-out underline underline-offset-1 decoration-indigo-700 hover:decoration-white decoration-2 transform"
                  >
                    Colby College
                  </a>
                  {" - "}
                  CS Teaching Assistant (Fall 2023 - Present)
                </p>
              </div>
              <h2 className="font-bold py-6 text-xl md:text-2xl">Projects</h2>
              <div className="text-xl space-y-4 pb-6">
                <div>
                  <p>
                    <a
                      href="https://github.com/rtrinh760/scholar_ninja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition duration-200 ease-in-out underline underline-offset-1 decoration-indigo-400 hover:decoration-white decoration-2 transform"
                    >
                      Scholar Ninja
                    </a>
                    {" - "}
                    Personalized scholarships finder (React Native, Flask,
                    Firebase)
                  </p>
                </div>
                <div>
                  <p>
                    <a
                      href="https://github.com/rtrinh760/vidsnap"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition duration-200 ease-in-out underline underline-offset-1 decoration-indigo-400 hover:decoration-white decoration-2 transform"
                    >
                      Vidsnap
                    </a>
                    {" - "}
                    AI video summarizer (Next.js, React, TypeScript, YouTube
                    API)
                  </p>
                </div>
                <div>
                  <p>
                    <a
                      href="https://github.com/rtrinh760/scholarai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition duration-200 ease-in-out underline underline-offset-1 decoration-indigo-400 hover:decoration-white decoration-2 transform"
                    >
                      ScholarAI
                    </a>
                    {" - "}
                    PDF document search (Next.js, React, TypeScript, PostgreSQL)
                  </p>
                </div>
                <div>
                  <p>
                    <a
                      href="https://github.com/rtrinh760/atoll-segmentation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition duration-200 ease-in-out underline underline-offset-1 decoration-indigo-400 hover:decoration-white decoration-2 transform"
                    >
                      Atoll Segmentation CV Model
                    </a>
                    {" - "}
                    Coral reef annotator (OpenCV, TensorFlow, Keras)
                  </p>
                </div>
                <div>
                  <p>
                    <a
                      href="https://github.com/rtrinh760/pycoMouse"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition duration-200 ease-in-out underline underline-offset-1 decoration-indigo-400 hover:decoration-white decoration-2 transform"
                    >
                      Micromouse
                    </a>
                    {" - "}
                    Maze-Traversing Robotic Mouse (Python, CircuitPython)
                  </p>
                </div>
                <div>
                  <p>
                    <a
                      href="https://rtrinh760.github.io/pathfinding-visualizer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition duration-200 ease-in-out underline underline-offset-1 decoration-indigo-400 hover:decoration-white decoration-2 transform"
                    >
                      Pathfinding Visualizer
                    </a>
                    {" - "}
                    Grid simulation of various traversal algorithms (React,
                    TypeScript)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
