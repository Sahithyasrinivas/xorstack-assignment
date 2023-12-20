import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
let Reg=()=>{
    let navigate=useNavigate()
    let [data,setData]=useState({})
    let upd=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let save=()=>{
        axios.post("http://localhost:5000/add",data).then((res)=>{
            navigate("/")
        })
    }
    return(
        <div>
            <input type="text" name="_id" onChange={upd}></input>
            <input type="text" name="name" onChange={upd}></input>
            <input type="text" name="age" onChange={upd}></input>
            <button onClick={save}>save</button>
        </div>
    )
}
export default Reg;