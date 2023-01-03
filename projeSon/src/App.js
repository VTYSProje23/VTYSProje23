import { BrowserRouter , Routes, Route} from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Help from "./pages/Help";
import Banner from "./pages/Banner";
import AvrupaK from "./pages/AvrupaK";
import Afrika from "./pages/Afrika";
import Avustralya from "./pages/Avustralya";
import Gamerika from "./pages/Gamerika";
import Kamerika from "./pages/Kamerika";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center"/>
        <Routes>
          <Route path='/Harita' element={<Help/>} />
          <Route path='/' element={<Banner/>} />
          <Route path='/asya' element={<Home/>} />
          <Route path='/avrupa' element={<AvrupaK/>} />
          <Route path='/afrika' element={<Afrika/>} />
          <Route path='/avustralya' element={<Avustralya/>} />
          <Route path='/kamerika' element={<Kamerika/>} />
          <Route path='/gamerika' element={<Gamerika/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
