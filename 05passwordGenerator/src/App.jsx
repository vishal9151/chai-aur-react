import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersInc, setNum] = useState(false);
  const [characterInc, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copy");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersInc) str += "0123456789";
    if (characterInc) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let num = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(num);
    }
    setPassword(pass);
  }, [numbersInc, characterInc, length, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersInc, characterInc, passwordGenerator]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
    setCopy("Copied");
    setTimeout(() => {
      setCopy("Copy");
    }, 500);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black-500 bg-gray-400">
        <h1 className="font-bold text-center py-3 text-3xl">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden pb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 mt-3 rounded-md"
            placeholder="Password"
            ref={passwordRef}
            readOnly
          />
          <button
            className="bg-blue-400 py-1 px-3 mt-3 ml-1 rounded-md"
            onClick={copyPassword}
          >
            {copy}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbersInc}
              id="numberInput"
              onChange={() => {
                setNum((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterInc}
              id="characterInput"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
