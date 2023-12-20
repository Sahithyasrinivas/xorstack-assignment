import { useEffect,useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
let Home=()=>{
    let navigate=useNavigate()
    let [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/user").then((res)=>{
            setData(res.data)
        })
    },[])
    let upd=(id)=>{
        navigate(`/update/${id}`)
    }
    let del=(id)=>{
        axios.delete("http://localhost:5000/del/$id").then(()=>{
            axios.get("http://localhost:5000/user").then((res)=>{
                setData(res.data)
            })
        })
    }
    return(
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                </tr>
                {
                    data.map((item)=>{
                       return(
                        <tr>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td><button onClick={()=>upd(item._id)}>update</button></td>
                        <td><button onClick={()=>del(item._id)}>delete</button></td>
                    </tr>
                       )
                    })
                }
            </table>
        </div>
    )
}
export default Home;