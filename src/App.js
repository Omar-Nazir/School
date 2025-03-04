import React from "react";
import Header from "./Components/header";
import Nav from "./Components/Nav";
// import Home from "./Components/pages/Home";
// import Dashboard from "./Components/pages/Dashbord";
import WindowSizeDisplay from "./Components/pages/size";


function App() {
  
  return (
      
      <div className='h-screen w-screen md:flex lg:flex overflow-auto'>

        
        <Nav />
        <div className='w-[100%] h-[100%]'>
        <Header/>
        {/* <Home/> */}
        {/* <Dashboard/> */}
        <WindowSizeDisplay/>
        {/* <WindowSizeDisplay/> */}
        
        </div>
      // </div>
  );
}

export default App;
