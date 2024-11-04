import "./css/bootstrap.css";
import "./css/styles.css";
import "./app.css"
import Mac from "./components/Pages/Mac";
import Ipad from "./components/Pages/Ipad";
import Watch from "./components/Pages/Watch";
import Tv from "./components/Pages/Tv";
import Music from "./components/Pages/Music";
import Support from "./components/Pages/Support";
import Iphone from "./components/Pages/Iphone";
import Search from "./components/Pages/Search";
import Cart from "./components/Pages/Cart";
import Main404 from "./components/Pages/Main404";
import AppleLogo from "./components/Pages/AppleLogo";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/Pages/SharedLayout";
import IphonePage from "./components/Pages/IphonePage";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<AppleLogo />} />
          <Route path="mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone/:productID" element={<IphonePage />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="watch" element={<Watch />} />
          <Route path="tv" element={<Tv />} />
          <Route path="music" element={<Music />} />
          <Route path="support" element={<Support />} />
          <Route path="search" element={<Search />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Main404 />} />
      </Routes>

    </div>
  );
}

export default App;
