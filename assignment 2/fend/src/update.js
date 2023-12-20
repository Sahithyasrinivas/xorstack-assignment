import axios from "axios"
import { useEffect,useState } from "react"
import {useNavigate,useParams} from "react-router-dom"
let Update=()=>{
    let navigate=useNavigate()
    let urlparam=useParams()
    let [data,setData]=useState({})
    useEffect(()=>{
        axios.get(`http://localhost:5000/databyid/${urlparam.id}`).then((res)=>{
            setData(res.data)
        })
    },[])
    let upd=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let update=()=>{
        axios.put("http://localhost:5000/upd",data).then((data)=>{
            navigate("/")
        })
    }
    return(
        <div>
            <input type="text" onChange={upd} name="_id" value={data._id}></input>
            <input type="text" onChange={upd} name="name" value={data.name}></input>
            <input type="text" onChange={upd} name="age" value={data.age}></input>
            <button onClick={update}>update</button>
        </div>
    )
}
export default Update;