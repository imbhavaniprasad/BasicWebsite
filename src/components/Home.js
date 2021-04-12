import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Home() {
    const[user,setUser] = useState([]);

    useEffect(()=>{
        loadUser();
    },[]);
   const loadUser = async ()=>{
       const result = await axios.get('http://localhost:3002/users');
       setUser(result.data);
       console.log(result.data);
   }
 const handleDelete = async(id)=>{
     await axios.delete(`http://localhost:3002/users/${id}`)
     loadUser();
 }
   
    return (
        <>
        <div className="adduser">
        <Link className="btn btn-primary" to="/addUser">Add User</Link>
        </div>
        <div className="container">
        
            <table className="table table-striped">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone No</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
          user.map((user,index)=>{
              return(
                  <tr>
                      <td>{index+1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                          <div>
                              <Link to={`/view/${user.id}`} className="btn btn-primary action">View</Link>
                              <Link to={`/editUser/${user.id}`} className="btn btn-primary action">Edit</Link>
                              <Link onClick={()=>handleDelete(user.id)} className="btn btn-primary action">Delete</Link>
                          </div>
                      </td>
                  </tr>
              )
          })
      }
  </tbody>
</table>
</div>
       
        </>
    )
}
