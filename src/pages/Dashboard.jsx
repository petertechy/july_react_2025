import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const navigate = useNavigate()
    let token = localStorage.token
    let endpoint = "http://localhost:5000/dashboard"
    const getDashboard = () =>{
        axios.get(endpoint,{
            headers: {
                "Authorization" :  `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept" : "application/json"
            },
            
        })
        .then((response)=>{
            if(!response.data.status){
                navigate("/signin")
            }
        })
    }
    useEffect(() => {
        getDashboard()
    })

    const handleLogout = () =>{
        localStorage.removeItem("token")
        navigate("/signin")
    }
    
  return (
    <div>
        <h1>Welcome to your Dashboard</h1>
        <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
    </div>
  )
}

export default Dashboard