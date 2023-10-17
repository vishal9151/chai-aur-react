import { useContext, useState } from "react";
import toggleContext from "./context/toggleContext";
import "./App.css";
import Card from "./Card";
import ThemeBtn from "./ThemeBtn";

function App() {
  const {toggle}=useContext(toggleContext);
  return (
    <>
      <div className={toggle?"flex flex-wrap min-h-screen items-center":"flex flex-wrap min-h-screen items-center dark:bg-black"}>
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
          <Card/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
