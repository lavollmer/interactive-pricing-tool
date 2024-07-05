import "./App.css";
import bgPattern from "./assets/bg-pattern.svg";

function App() {
  return (
    <>
      <div className="font-15px font-manrope w-full" style={{backgroundImage: `url(${bgPattern})`}}>
        <h1>Simple, traffic-based pricing</h1>
        <h2>Sign-up for our 30-day trial.No credit card required.</h2>
      </div>
    </>
  );
}

export default App;
