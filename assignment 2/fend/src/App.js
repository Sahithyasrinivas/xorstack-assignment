import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Home"
import Nav from "./Nav"
import Reg from "./Reg"
import Update from "./update"
let App=()=>{
    return(
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Reg" element={<Reg/>}></Route>
            <Route path="/update/:id" element={<Update/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default App
