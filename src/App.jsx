import "./App.css";
import bgPattern from "./assets/bg-pattern.svg";
import patternCircles from "./assets/pattern-circles.svg";

function App() {
  return (
    <>
      <div>
        <img
          className="w-full h-full object-cover"
          src={bgPattern}
          alt="bgPattern"
        />

        <div>
          <img src={patternCircles} alt="patternCircles" />
          <h1 className="font-bold text-dark-desaturated-blue text-lg font-manrope">
            Simple, traffic-based pricing
          </h1>
          <h2 className="text-grayish-blue text-sm font-manrope">
            Sign-up for our 30-day trial. No credit card required.
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
