import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Posts from "./components/posts/Posts";

function App() {
  // const user = true;
  return (
    <Router>
      <TopBar />
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/post/:id" element = {<Single/>}/>
          <Route path= "/register" element = {<Register/>}/>
          <Route path= "/login" element= {<Login/>}/>
          <Route path="/write" element = {<Write/>}/>
          <Route path="/settings" element = {<Settings/>}/>
          <Route path="/post" element = {<Posts/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;