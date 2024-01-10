import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} exact/>
      <Route  path="/notes" element={<Notes />} />
      <Route path="/create" element={<CreateNote />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
