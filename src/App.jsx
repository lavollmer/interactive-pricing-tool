import "./App.css";
import bgPattern from "./assets/bg-pattern.svg";

function App() {
  return (
    <>
      <div className="w-full" style={{backgroundImage: `url(${bgPattern})`}}>
        <h1 className="font-bold text-grayish-blue font-15px font-manrope">Simple, traffic-based pricing</h1>
        <h2 className="font-bold text-grayish-blue font-15px font-manrope">Sign-up for our 30-day trial. No credit card required.</h2>
      </div>
    </>
  );
}

export default App;
