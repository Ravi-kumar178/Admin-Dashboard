import { Route, Routes } from "react-router-dom";
import "./App.css";
import OverviewPage from "./Pages/OverviewPage";
import ProductPage from "./Pages/ProductPage";
import Sidebar from "./Components/Sidebar";
import UsersPage from "./Pages/UsersPage";
import SalesPage from "./Pages/SalesPage";

function App() {
  return (
    <div className="h-screen flex bg-gray-900 overflow-hidden text-gray-100">
      {/* BG */}
      <div className="fixed inset-0 ">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"/>
        <div className="absolute inset-0 backdrop-blur-sm "/>
      </div>
      {/* sidebar */}

      <Sidebar/>

      {/* routes */}
      <Routes>
        <Route path="/" element={<OverviewPage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/sales" element={<SalesPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
