const projects = [
  {
    name: "Random Quote Machine",
    url: "https://random-quote-cq7.pages.dev/",
    code: "https://github.com/Arrangedgodly/random-quote",
    img: "",
    description: "A site that displays a random quote via API return and allows the user to tweet the quote.",
  },
  {
    name: "Markdown Preview",
    url: "https://markdown-preview.pages.dev/",
    code: "https://github.com/Arrangedgodly/markdown-preview",
    img: "",
    description: "A site that allows users to enter markdown into a text box and see a live preview of the markdown in a seperate box.",
  },
  {
    name: "Drum Machine",
    url: "https://drum-machine-9bc.pages.dev/",
    code: "https://github.com/Arrangedgodly/drum-machine",
    img: "",
    description: "A 9 pad drum machine that plays a sound when the user clicks on the pad or presses the corresponding key on their keyboard.",
  },
  {
    name: "JavaScript Calculator",
    url: "https://js-calculator-2qu.pages.dev/",
    code: "https://github.com/Arrangedgodly/js-calculator",
    img: "",
    description: "A calculator that allows the user to perform basic math operations.",
  },
  {
    name: "Pomodoro Clock",
    url: "https://work-clock-1mz.pages.dev/",
    code: "https://github.com/Arrangedgodly/work-clock",
    img: "",
    description: "A timer that allows the user to set a work time and a break time and counts down from the work time to the break time and back again.",
  }
]

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen">
      <h1 className="md:text-5xl text-3xl font-bold md:m-10 m-5 text-center text-primary-content">
        Graydon Wasil's FreeCodeCamp Projects
      </h1>
      <h2 className="md:text-3xl text-xl font-bold md:m-5 m-2 text-center text-secondary">
        Front End Libraries
      </h2>
      <div className="flex flex-wrap justify-around md:m-5 m-2 w-[85%]">
        {projects.map((project) => (
          <div className="card card-compact basis-1/4 flex-1 bg-primary text-primary-content shadow-xl md:m-5 m-2" key={project.name}>
          <div className="card-body items-center text-center">
            <h3 className="card-title md:text-lg text-md">{project.name}</h3>
            <p className="md:text-md text-sm">{project.description}</p>
            <div className="card-actions items-center justify-center">
              <a className="btn btn-secondary btn-sm text-xs" href={project.url} target="_blank">Go to Project</a>
              <a className="btn btn-accent btn-sm text-xs" href={project.code} target="_blank">Go to Code</a>
            </div>
          </div>
        </div>))}
      </div>
    </div>
  );
}

export default App;
