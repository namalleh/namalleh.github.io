import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Need from "./Components/Need";
import GetInTouch from "./Components/GetInTouch";
import ASolution from "./Components/ASolution";
import icon from "./assets/IconOnly_Transparent_NoBuffer.png";

function App() {
  return (
    <div>
      <div className="App">
        <div>
          <table className="desktopSplash">
            <thead>
              <tr>
                <td>
                  <img className="logo" src={icon}></img>
                </td>
                <td>
                  <div className="root-title">
                    <span>ROOT PROTECTION</span>
                  </div>
                  <div>
                    <span className="tagline">
                      namalleh : Making Scraping Unreasonable
                    </span>
                  </div>
                </td>
              </tr>
            </thead>
          </table>
          <div className="mobileSplash">
            <div className="tagline">
              <br />
              <p>namalleh</p>
              <p>PROTECT YOUR ROOT</p>
            </div>
            <img className="logo" src={icon}></img>
          </div>
        </div>

        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Need />} />
                <Route path="a-solution" element={<ASolution />} />
                <Route path="get-in-touch" element={<GetInTouch />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
