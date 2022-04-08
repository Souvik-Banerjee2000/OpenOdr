import logo from './logo.svg';
import './App.css';

// import AuthenticationForm from "./components/AuthenticationForm"
import AuthenticationForm from "./components/AuthenticationForm/AuthenticationForm"
import AppMain from "./AppMain";
import Dashboards from "./Dashborads";
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/dashboards" element={<Dashboards />} />
            <Route path="/authenticationForm" element={<AppMain/>}></Route>

            <Route
              path="*"
              element={<Navigate to="/authenticationForm" />}
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
