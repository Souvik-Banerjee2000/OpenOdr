import logo from './logo.svg';
import './App.css';

// import AuthenticationForm from "./components/AuthenticationForm"
import AuthenticationForm from "./components/AuthenticationForm/AuthenticationForm"
import UserTypeContextProvider from "./context/UsertypeContext"
import RegisterOrLoginContextProvider from "./context/RegisterOrLoginContext"
function App() {

  function renderHomePage(){
    if(localStorage.getItem("openodr") === "" || localStorage.getItem("openodr") === null || localStorage.getItem("openodr") === undefined)
      return <AuthenticationForm/>
    return  <div>Hello</div>
  }
  return (
    <div className="App">
        <UserTypeContextProvider>
          <RegisterOrLoginContextProvider>
            {renderHomePage()}
        </RegisterOrLoginContextProvider>
        </UserTypeContextProvider>
    </div>
  );
}

export default App;
