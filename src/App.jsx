import "./App.css";
import bgPattern from "./assets/bg-pattern.svg";

function App() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center" style={{backgroundImage: `url(${bgPattern})`}}>
        <h1 className="font-bold text-dark-desaturated-blue text-lg font-manrope">Simple, traffic-based pricing</h1>
        <h2 className="text-grayish-blue text-sm font-manrope">Sign-up for our 30-day trial. No credit card required.</h2>
      </div>
    </>
  );
}

export default App;
