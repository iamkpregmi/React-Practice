import logo from './logo.svg';
import './App.css';
import Header from "./MyCompoments/Header";
import {Todos} from "./MyCompoments/Todos";
import {Footer} from "./MyCompoments/Footer";

function App() {
  return (
    <>
      <Header/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
