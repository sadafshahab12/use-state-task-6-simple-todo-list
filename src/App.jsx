import { useState } from "react";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const handleTodoList = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput("");
    }
  };
  return (
    <>
      <div className=" flex justify-center items-center  h-screen p-5  ">
        <div className="space-y-4 p-5 rounded-md max-w-3xl w-full bg-bgImg bg-cover bg-no-repeat bg-center shadow-lg  ">
          <h1 className="text-2xl font-bold text-center">Simple Todo List</h1>
          <div className="flex sm:flex-row flex-col  gap-3 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add Items"
              className="py-2 px-4 border border-slate-700 rounded-md text-lg flex-1 outline-none w-full"
            />
            <button
              onClick={handleTodoList}
              className="bg-slate-700 hover:bg-gradient-to-br hover:from-slate-600 hover:to-black text-white font-semibold py-3 px-8 rounded-md cursor-pointer shrink-0 transition-all ease-in duration-200 active:scale-95 sm:w-auto w-full"
            >
              Add
            </button>
          </div>
          <ul className="space-y-3 text-lg ">
            {items.map((item, index) => (
              <li
                key={index}
                className="w-full bg-slate-700 text-white odd:bg-orange-300 odd:text-black  py-1 px-4 rounded-md text-lg sm:text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
