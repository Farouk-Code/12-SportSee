import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./assets/components/Header";
import Sidebar from "./assets/components/Sidebar";
import SourceProvider from "./assets/context/context";
import Dashboard from "./assets/Pages/Dashboard";
import Error from "./assets/Pages/Error";

function App() {
  return (
    <BrowserRouter>
      <SourceProvider>
        <Header />
        <div className="main-content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Navigate to="user/12" />} />
            <Route path="user/:userId" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </SourceProvider>
    </BrowserRouter>
  );
}

export default App;
