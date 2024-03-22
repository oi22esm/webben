import Home from "./pages/Home"
import Meny from "./pages/Meny"
import Vagbe from "./pages/Vagbe"
import Kontakt from "./pages/Kontakt"
import Omdome from "./pages/Omdome"
import Galleri from "./pages/Galleri"

import Header from "./components/Header";

import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
  <div>
	<div style={{backgroundColor:"rgb(239, 225, 201"}}>
	<Router>
  	<Header />
		<Routes>
			<Route exact path="/" element={<Home/>}/>
			<Route path="/meny" element={<Meny/>}/>
			<Route path="/vagbe" element={<Vagbe/>}/>
			<Route path="/kontakt" element={<Kontakt/>}/>
			<Route path="/omdome" element={<Omdome/>}/>
			<Route path="/galleri" element={<Galleri/>}/>
		</Routes>
	<Footer />
	</Router>
  </div>
  </div>
  )
}

export default App;
