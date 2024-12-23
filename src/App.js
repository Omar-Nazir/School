import React from "react";
import Header from "./Components/header";
import Nav from "./Components/Nav";
import Home from "./Components/pages/Home";


function App() {
  return (
      
      <div class='h-screen w-screen md:flex lg:flex overflow-auto'>
        
        <Nav />
        <div class='w-[100%] h-[100%]'>
        <Header/>
        <Home/>
        
        </div>
      </div>
  );
}

export default App;
