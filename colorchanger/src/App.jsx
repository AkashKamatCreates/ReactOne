import { useState } from "react";

function App() {
  const [color, changeColor] = useState("black");

  return (
    <div
      className="h-screen flex flex-col justify-end items-center duration-1000"
      style={{ backgroundColor: color }}
    >
      {/* Move this div to the bottom of the webpage */}
      <div className="flex flex-wrap justify-center gap-2 shadow-md bg-slate-600 px-2 py-2 rounded-xl mt-4">
        <button
          className="outline-none px-4 py-2 rounded-md text-white shadow-sm"
          style={{ backgroundColor: "#FF5733" }} // Coral
          onClick={() => changeColor("#FF5733")}
        >
          Coral
        </button>
        <button
          className="outline-none px-4 py-1 rounded-md text-white shadow-sm"
          style={{ backgroundColor: "#F08080" }} // Light Coral
          onClick={() => changeColor("#F08080")}
        >
          Light Coral
        </button>
        <button
          className="outline-none px-4 py-1 rounded-md text-white shadow-sm"
          style={{ backgroundColor: "#00FFFF" }} // Cyan
          onClick={() => changeColor("#00FFFF")}
        >
          Cyan
        </button>
        <button
          className="outline-none px-4 py-1 rounded-md text-white shadow-sm"
          style={{ backgroundColor: "#B0E0E6" }} // Powder Blue
          onClick={() => changeColor("#B0E0E6")}
        >
          Powder Blue
        </button>
        <button
          className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
          style={{ backgroundColor: "#FFD700" }} // Gold
          onClick={() => changeColor("#FFD700")}
        >
          Gold
        </button>
        <button
          className="outline-none px-4 py-1 rounded-md text-white shadow-sm"
          style={{ backgroundColor: "#00FF00" }} // Lime
          onClick={() => changeColor("#00FF00")}
        >
          Lime
        </button>
        {/* Add more buttons with interesting colors */}
        <button
          className="outline-none px-4 py-1 rounded-md text-white shadow-sm"
          style={{ backgroundColor: "#8A2BE2" }} // Blue Violet
          onClick={() => changeColor("#8A2BE2")}
        >
          Blue Violet
        </button>
        <button
          className="outline-none px-4 py-1 rounded-md text-white shadow-sm"
          style={{ backgroundColor: "#FF4500" }} // Orange Red
          onClick={() => changeColor("#FF4500")}
        >
          Orange Red
        </button>
        <button
          className="outline-none px-4 py-1 rounded-md text-white shadow-sm"
          style={{ backgroundColor: "#8B0000" }} // Dark Red
          onClick={() => changeColor("#8B0000")}
        >
          Dark Red
        </button>
        <button
          className="outline-none px-4 py-1 rounded-md text-white shadow-sm"
          style={{ backgroundColor: "#9932CC" }} // Dark Orchid
          onClick={() => changeColor("#9932CC")}
        >
          Dark Orchid
        </button>
        <button
          className="outline-none px-4 py-1 rounded-md text-white shadow-sm"
          style={{ backgroundColor: "#4682B4" }} // Steel Blue
          onClick={() => changeColor("#4682B4")}
        >
          Steel Blue
        </button>
      </div>
    </div>
  );
}

export default App;
