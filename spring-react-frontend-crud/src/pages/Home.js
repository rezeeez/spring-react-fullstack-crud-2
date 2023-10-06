import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
export default function Home() {

    const {id} = useParams();
    const [users, setUsers] = useState([]) //multiple variables can use useState

    useEffect(()=>{ //to use the useState 
        loadUsers();
    },[]); //needs empty array to execute the use effect only once

    const loadUsers = async () =>{ //waiting to execute the useEffect
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
      // console.log(result.data);
    };

    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();
    };


  return (
    <div className='container'>
      <div className='py-4'>
        
      <table className="table border shadow"> {/* addded the border shadow */}
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  
  {users.map((user, index) => ( //method for showing the backend data
  <tr key={index}>
    <th scope="row">{index + 1}</th>
    <td>{user.name}</td>
    <td>{user.username}</td>
    <td>{user.email}</td>
    <td>
      <Link className='btn btn-outline-primary mx-2' to={'/adduser'}> {/* mx-2 for the spacing */}
          Add
      </Link>
      <Link className='btn btn-outline-secondary mx-2' 
      to={`/edituser/${user.id}`}>
          Update
      </Link>
      <button className='btn btn-outline-danger mx-2'
        onClick={()=>deleteUser(user.id)}
      >
          Delete
      </button>

    </td>
  </tr>
))} 

  </tbody>
</table>
      </div>
    </div>
  )
}
