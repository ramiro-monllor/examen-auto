import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home/Home.jsx";
import { Auto } from "./views/Auto/Auto.jsx";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auto" element={<Auto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
