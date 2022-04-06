import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserEdit from "./pages/userEdit/UserEdit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user/:userId" element={<UserEdit/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
