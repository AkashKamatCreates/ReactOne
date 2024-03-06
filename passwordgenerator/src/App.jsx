import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbertrue, setNumbertrue] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");



  //useRef hook 
  const passwordRef = useRef(null)



  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbertrue) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+<>?{}~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numbertrue, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    alert('copied')
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbertrue, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-2xl rounded-lg px-4 py-8 mt-10 text-red-400 bg-gray-600">
        <h1 className="text-4xl text-center text-cyan-50 mb-5 mt-0 ">
          Password Generator
        </h1>

        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref = {passwordRef}
          />

          <button 
            onClick={copyPasswordToClipboard}
          className="outline-none bg-cyan-700 text-white px-3 py-2 shrink-0 shadow-lg">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex tiems.center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label className="text-emerald-400">Length: {length}</label>
          </div>

          <div className="flex tiems-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbertrue}
              id="numberInput"
              onChange={() => {
                setNumbertrue((prev) => !prev);
              }}
            ></input>
            <label htmlFor="numberInput" className="text-cyan-600">
              Numbers
            </label>
          </div>

          <div className="flex tiems-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            ></input>
            <label htmlFor="charInput" className="text-cyan-600">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
