import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./Components/Layout";
import Need from "./Components/Need";
import ASolution from "./Components/ASolution";
import icon from "./assets/IconOnly_Transparent_NoBuffer.png";
import FineGrainedControl from "./Components/FineGrainedControl.jsx";
import { FaLinkedin, FaReddit } from "react-icons/fa";

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
          <div><b>Update</b>: We are now <a href="https://button.solutions">button ^ solutions</a>! Come check us out.</div>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Need />} />
                <Route path="a-solution" element={<ASolution />} />
                <Route path="fine-grained-control" element={<FineGrainedControl />}/>
              </Route>
            </Routes>
          </BrowserRouter>
         
          <div style={{'vertical-align': 'text-bottom', height:'200px', 'padding-top': '100px', padding:"5px"}} >
            <a href={"https://www.linkedin.com/company/namalleh/"}><FaLinkedin/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
