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
            <div className="flex flex-row space-x-12 items-center justify-center">
              <h2 className="font-manrope font-bold text-xs text-grayish-blue">100K PAGE VIEWS</h2>
              <div className="flex flex-row">
              <h2 className="font-manrope font-bold text-2xl text-dark-desaturated-blue">$16.00</h2>
              <h2 className="flex items-center justify-center font-manrope font-bold text-xs text-grayish-blue">/month</h2>
            </div>
            </div>
            <div>
              <p>Slider</p>
            </div>
            <div className="flex flex-row text-grayish-blue text-sm font-manrope">
              <p>Monthly Billing</p>
              {/* Label element provides clikable area for checkbox and associate with label input, input has type of checkbox, first div is the background of the checkbox and the second div is the checkbox indicator */}
              <label className="inline-flex items-center cursor-pointer rounded-full">
                {/* peer class is added to establish a reference for sibling elements, opacity-0 and absolute are to visually hide the checkbox */}
                <input type="checkbox" className="peer opacity-0 absolute" />
                <div className="relative w-11 h-6 bg-light-grayish-blue-toggle rounded-full"></div>
                <div className="absolute left-0 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-full transition-transform"></div>
              </label>
              <p>Yearly Billing</p>
              <div className="bg-light-grayish-red rounded-full p-1 outline-style-solid">
                <p className="text-light-red">25% discount</p>
              </div>
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
