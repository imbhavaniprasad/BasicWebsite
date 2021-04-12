import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
const View = ({users}) =>{
    let {id} = useParams();
    const[user,setUser] = useState({
    });
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async()=>{
          let result = await axios.get(`http://localhost:3002/users/${id}`);
          setUser(result.data);
    }
    return (
        <div>
            <h1>User Id: {id}</h1>
        <li>User Name:{user.name}</li>
        <li>User Email:{user.email}</li>
        <li>User Phone:{user.phone}</li>
        </div>
    )
}
export default View;
