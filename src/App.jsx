import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div className="w-full h-screen flex justify-center  text-white" style={{backgroundColor:color}}>
      <div className="p-1 fixed bottom-12 m-auto bg-white rounded-xl flex gap-3">
        <button className="px-4 py-2 rounded-xl bg-red-500"  onClick={() => setColor("red")}>Red</button>
        <button className="px-4 py-2 rounded-xl bg-green-500"  onClick={() => setColor("green")}>Green</button>
        <button className="px-4 py-2 rounded-xl bg-blue-500"  onClick={() => setColor("blue")}>Blue</button>
        <button className="px-4 py-2 rounded-xl bg-black"  onClick={() => setColor("black")}>Black</button>

      </div>
    </div>
  );
}

export default App;
