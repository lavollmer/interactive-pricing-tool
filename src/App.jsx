import "./App.css";
//importing the background image from design folder
import bgPattern from "./assets/bg-pattern.svg";
//importing the circles image from design folder
import patternCircles from "./assets/pattern-circles.svg";
//importing checkmarks
import checkmark from "./assets/icon-check.svg";

function App() {
  return (
    <>
      {/* top part of the home page */}
      <div className="flex items-center justify-center">
        <img
          className="h-full w-full"
          src={bgPattern}
          alt="Background pattern"
        />
        <img
          src={patternCircles}
          alt="Background circles"
          className="h-24 w-24 absolute justify-center items-center z-10 "
        />
        <div className="z-20 absolute flex flex-col items-center">
          <h1 className="font-bold text-dark-desaturated-blue text-lg font-manrope">
            Simple, traffic-based pricing
          </h1>
          <h2 className="text-grayish-blue text-sm font-manrope">
            Sign-up for our 30-day trial. No credit card required.
          </h2>
          <div className="bg-white shadow-lg rounded-md">
            <div>
              <h1>100K Page Views</h1>
              <h1>$16.00/month</h1>
            </div>
            <div>
              <p>Slider</p>
            </div>
            <div>
              <p>Monthly Billing</p>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Toggle me
                </span>
              </label>
              <p>Yearly Billing</p>
              <p>?% discount</p>
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="flex flex-row space-x-10 m-10">
              <ul className="checkmark-list text-sm">
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
              </ul>
              <div className="flex">
                <button className="pl-4 pr-4 mt-1 mb-1 w-full bg-dark-desaturated-blue text-white text-sm rounded-full">
                  Start my trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
