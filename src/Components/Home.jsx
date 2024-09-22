import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])
    const handleDelete = (id) => {
        const confirm = window.confirm("Would you like to Delete ?");
        if (confirm) {
            axios.delete('http://localhost:3000/users/' + id)
                .then(res => {
                    // location.reload();
                    navigate(0);
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>List of Services</h1>
        <div className='w-full max-w-screen-lg rounded bg-white border shadow p-4 overflow-y-auto max-h-screen'>
            <div className='d-flex justify-content-end mb-4'>
                <Link to='/create'  className='btn btn-success  rounded-full shadow-lg transition duration-300 hover:bg-green-600'>
                    Add Service
                </Link>
            </div>
            <div className="row flex-wrap justify-content-start">
                {data.map((d, i) => (
                    <div key={i} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 cursor-pointer">
                        <div className="card border-2 border-gray-200 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" style={{ minHeight: '250px' }}>
                            <div className="card-body d-flex flex-column">
                                <h5 className="font-bold text-xl mb-2">{d.name}</h5>
                                <p className="card-text text-gray-700 mb-4">{d.description}</p>
                                <p className="card-text font-semibold">Price: {d.price}</p>
                                <div className="mt-auto d-flex justify-content-end">
                                    <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                    <button onClick={e => handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
    )
}
export default Home;


// <table className='table table-striped' >
//             <thead>
//             <tr>
//                 <th>ID</th>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Price</th>
//                 <th>Action</th>
//             </tr>
//             </thead>
//             <tbody>
//                 {
//                     data.map((d,i) => (
//                         <tr key={i}>
//                             <td>{d.id}</td>
//                             <td>{d.name}</td>
//                             <td>{d.description}</td>
//                             <td>{d.price}</td>
//                             <td>
//                                <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2 '>Read</Link>
//                                 <Link to={`/update/${d.id}`}  className='btn btn-sm btn-primary me-2 '>Edit</Link>
//                                 <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger'>Delete</button>
//                             </td>

//                         </tr>
//                     ))
//                 }
//             </tbody>
// style={{ minHeight: '250px' }}
//         </table>