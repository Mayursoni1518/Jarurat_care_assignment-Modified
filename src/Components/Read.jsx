import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const Read = () => {
  const [data, setData] = useState([])
  const { id } = useParams();
  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    }, [])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light' >
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Details of User</h3>
        <div className='mb-2'>
          <strong>Name: {data.name}</strong>
        </div>
        <div className='mb-2'>
          <strong>description: {data.description}</strong>
        </div>
        <div className='mb-3'>
          <strong>price: {data.price}</strong>
        </div>
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to='/' className='btn btn-primary ms-3' >Back</Link>
      </div>
    </div>
  )
}
export default Read;
