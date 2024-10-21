import { Outlet } from "react-router-dom";
import "./App.css";
import Header from '/src/Components/Header/Header.tsx';
// import Footer from '/src/Components/Footer/Footer.tsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;