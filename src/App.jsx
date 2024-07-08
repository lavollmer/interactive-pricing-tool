import "./App.css";
import bgPattern from "./assets/bg-pattern.svg";
import patternCircles from "./assets/pattern-circles.svg";

function App() {
  return (
    <>
      <div
        className="w-full flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bgPattern})` }}
      >
        <div style={{ backgroundImage: `url(${patternCircles})` }}>
          <h1 className="font-bold text-dark-desaturated-blue text-lg font-manrope">
            Simple, traffic-based pricing
          </h1>
          <h2 className="text-grayish-blue text-sm font-manrope">
            Sign-up for our 30-day trial. No credit card required.
          </h2>
        </div>
        <div className="bg-white flex flex-col">
          <label
            for="default-range"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Default range
          </label>
          <input
            id="default-range"
            type="range"
            value="50"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          ></input>
        </div>
      </div>
    </>
  );
}

export default App;
