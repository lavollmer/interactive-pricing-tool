import "./App.css";
//importing the background image from design folder
import bgPattern from "./assets/bg-pattern.svg";
//importing the circles image from design folder
import patternCircles from "./assets/pattern-circles.svg";
//importing the react useState hook
import { useState } from "react";

function App() {
  //useState hook to set the initial value of the slider
  //value is the current state and setValue is the function that updates the state
  const [value, setValue] = useState(50);

  //function is callback for handling changes in slider input
  //when slider value is changed, it calls setValue to update the state of the new valude obtained from the event object
  const handleSliderChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {/* top part of the home page */}
      <div className="flex flex-col items-center justify-center relative">
        <img
          className="absolute display:flex md:shrink-0 top-0 left-0 w-full h-full  object-cover z-0"
          src={bgPattern}
          alt="Background pattern"
        />
        <div className="flex m-14 md:m-20 items-center justify-center relative">
          <img
            src={patternCircles}
            alt="Background circles"
            className="md:h-24 md:w-24 absolute justify-center items-center"
          />
          <div className="z-10 flex flex-col">
            <h1 className="font-bold text-dark-desaturated-blue text-lg md:text-2xl font-manrope">
              Simple, traffic-based pricing
            </h1>
            <h2 className="text-grayish-blue m-4 md:m-2 text-md md:text-xs font-manrope">
              Sign-up for our 30-day trial. No credit card required.
            </h2>
          </div>
        </div>
        <div className="flex p-4 md:p-20 relative">
          <div className="bg-white shadow-lg rounded-md md:p-10">
            <div className="flex flex-row space-x-12 items-center justify-center">
              <h2 className="font-manrope font-bold text-sm md:text-md text-grayish-blue">
                {value}K PAGE VIEWS
              </h2>
              <div className="flex flex-row">
                <h2 className="font-manrope font-bold md:text-2xl text-dark-desaturated-blue">
                  $
                </h2>
                <h2 className="font-manrope font-bold md:text-2xl text-dark-desaturated-blue">
                  {value}
                </h2>
                <h2 className="font-manrope font-bold md:text-2xl text-dark-desaturated-blue">
                  .00
                </h2>
                <h2 className="flex items-center justify-center font-manrope font-bold text-xs text-grayish-blue">
                  /month
                </h2>
              </div>
            </div>
            {/* Slider */}
            <div className="flex m-6">
              <input
                id="range"
                type="range"
                min="1"
                max="100"
                value={value}
                onChange={handleSliderChange}
                className="w-full h-2 bg-soft-cyan rounded-lg appearance-none cursor-pointer accent-bg-strong-cyan"
              ></input>
            </div>
            {/* Toggle button */}
            <div className="flex flex-row p-2 align-items items-center justify-center space-x-2 text-grayish-blue text-xxs font-manrope">
              <h2>Monthly Billing</h2>
              {/* Label element provides clikable area for checkbox and associate with label input, input has type of checkbox, first div is the background of the checkbox and the second div is the checkbox indicator */}
              <label className="flex items-center cursor-pointer rounded-full">
                {/* peer class is added to establish a reference for sibling elements, opacity-0 and absolute are to visually hide the checkbox */}
                <input type="checkbox" className="peer opacity-0 absolute" />
                <div className="relative w-11 h-6 bg-strong-cyan rounded-full"></div>
                <div className="absolute w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-full transition-transform"></div>
              </label>

              <h2>Yearly Billing</h2>
              <div className="bg-light-grayish-red rounded-full p-1 outline-style-solid">
                <h2 className="text-light-red font-bold">25% discount</h2>
              </div>
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className="flex flex-col items-center justify-center space-y-2 mb-4 md:flex-row  md:space-x-20 text-grayish-blue">
              <ul className="checkmark-list text-xxs md:text-sm md:p-4">
                <li className="pb-2">Unlimited websites</li>
                <li className="pb-2">100% data ownership</li>
                <li>Email reports</li>
              </ul>
              {/* Start my trial button */}
              <div className="flex flex-col items-center justify-center">
                <button className="pl-8 pr-8 pt-2 pb-2 w-full bg-dark-desaturated-blue text-white text-sm rounded-full hover:bg-soft-cyan duration-90 ease-in-out">
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
