import { Outlet } from "react-router-dom";
import "./App.css";
import Header from './Components/Header/Header.tsx';
import Nav from './Components/Nav/Nav.tsx';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;