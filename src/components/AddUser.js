import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
export default function AddUser() {
    let history= useHistory();
    const[user,setUser] = useState({
        name:"",
        email:"",
        phone:""
    });
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({
            ...user,
            [name] : value
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(user.name !=="" && user.email!=="" && user.phone !==""){
            loadUser();
        }
        else{
            alert("enter something");
        }
    }
    const loadUser= async ()=>{
         await axios.post("http://localhost:3002/users",user);
         history.push("/");
    }
    return (
        <>
        <div className="container">
            <form>
  <div class="form-group">
  <label>Full Name</label>
    <input type="text" onChange={handleChange} value={user.name} class="form-control" id="exampleInputEmail1" name="name" placeholder="Enter Full Name" />
  </div>
  <div>
    <label >Email address</label>
    <input type="email" onChange={handleChange} value={user.email} class="form-control" id="exampleInputEmail1" name="email" placeholder="Enter email" /> 
  </div>
  <div>
    <label>Phone</label>
    <input type="phone"onChange={handleChange} value={user.phone} class="form-control" id="exampleInputEmail1" name="phone" placeholder="Enter Phone" />
  </div>
  <Link to="/" onClick={handleSubmit} type="submit" class="btn btn-primary btn-block finaladd">Add User</Link>
</form>
        </div>
        </>
    )
}
