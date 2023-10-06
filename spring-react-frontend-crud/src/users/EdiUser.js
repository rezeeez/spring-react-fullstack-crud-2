import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function EditUser() {

  let navigate = useNavigate(); //hook that redirects user after an event

  const {id} = useParams();

  const [user, setUsers] = useState({
    name:"",
    username:"",
    email:"",
  });

  const {name, username, email}= user;

  const onInputChange = (e) =>{
     setUsers({...user, [e.target.name]:e.target.value});
  };

  useEffect(()=>{
    loadUsers()
  },[]);

  const onSubmit  = async (e) =>{
      e.preventDefault(); //prevents creating weird urls
      await axios.put(`http://localhost:8080/user/${id}`,user); //put for the edit of data
      navigate("/"); //useNavigate redirects to homepage after clicking update
  };
  
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUsers(result.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounder p-4 mt-2 shadow'>
          {/* column medium 6 offset medium size 3 */}
          <h2 className='text-center m-4'>Edit FORM</h2>
          <form onSubmit={(e)=>onSubmit(e)}> 
              <div className='mb-3'>
                {/* margin bottom 2 */}
                <label htmlFor='Name' className='form-label'>
                  Name
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter Name'
                name='name'
                value={name}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
              </div>
              <div className='mb-3'>
                {/* margin bottom 2 */}
                <label htmlFor='Name' className='form-label'>
                  User Name
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter User Name'
                name='username'
                value={username}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
              </div>
              <div className='mb-3'>
                {/* margin bottom 2 */}
                <label htmlFor='Name' className='form-label'>
                  E-Mail
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter  E-Mail'
                name='email'
                value={email}
                onChange={(e)=>onInputChange(e)}
                >
                </input>
              </div>
                <button type='submit' className='btn btn-outline-primary'>
                  Submit
                </button>
                {/* <Link className='btn btn-outline-danger mx-2' to="/">
                  Cancel
                </Link> */}
            </form>
        </div>
      </div>

    </div>
  )
}
