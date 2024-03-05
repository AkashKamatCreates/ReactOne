import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-blue-400 text-slate-900 rounded-2xl p-5 mb-10">
        tailwind css sample
      </h1>
      <Card username="akash kamat" btext = "thou shall press"/>
      <Card username="react with vite" btext = "please click"/>
    </>
  );
}

export default App;
