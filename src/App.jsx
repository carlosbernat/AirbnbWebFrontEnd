// import Filters from "./shared/Filters";
// import Footer from "./shared/Footer";
// import Navbar from "./shared/Navbar";
// import Rentals from "./components/Rentals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map( (route, indexRoute)=>{
          return ( <Route path={route.path} Component={route.component} key={indexRoute}></Route> );
        } )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
