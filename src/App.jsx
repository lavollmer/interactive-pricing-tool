import "./App.css";
//importing the background image from design folder
import bgPattern from "./assets/bg-pattern.svg";
//importing the circles image from design folder
import patternCircles from "./assets/pattern-circles.svg";

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
              <p>Yearly Billing</p>
              <p>?% discount</p>
            </div>
            <div>
              <p>Unlimited websites</p>
              <p>1--% data ownership</p>
              <p>Email reports</p>
              <p>Start my trial</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
