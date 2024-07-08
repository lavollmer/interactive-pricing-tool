import "./App.css";
import bgPattern from "./assets/bg-pattern.svg";
import patternCircles from "./assets/pattern-circles.svg";

function App() {
  return (
    <>
      <div>
        <img
          className="h-full w-full"
          src={bgPattern}
          alt="Background pattern"
        />
        <img
          src={patternCircles}
          alt="Background circles"
          className="absolute justify-center h-full w-full"
        />
      </div>
      <div className="z-20 relative flex flex-col items-center">
        <h1 className="font-bold text-dark-desaturated-blue text-lg font-manrope">
          Simple, traffic-based pricing
        </h1>
        <h2 className="text-grayish-blue text-sm font-manrope">
          Sign-up for our 30-day trial. No credit card required.
        </h2>
      </div>
    </>
  );
}

export default App;
