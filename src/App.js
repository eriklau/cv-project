import React from "react";
import Main from "./components/Main";

export default function App() {
  return (
    <>
      <Main />
    </>
  );
}


// App.js is short, includes a <Main /> and maybe a <Header />, 
// the Main.js in components will have all the main functionality with handle____ methods
// there will be even more component folders within that Main.js will use functions from, such as general info, education, experience, etc.
// two (or three) folders, one for input, one for how it looks like or preview, and one maybe for misc. like buttons to generate pdf, or example cv