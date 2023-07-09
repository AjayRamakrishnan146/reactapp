import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const[data,setData]=useState([])
    const fetechDataFromApi=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            (response)=>{
                setData(response.data)
            }
        )

    }
    useEffect(()=>{
        fetechDataFromApi()
    })


    return (
        <div>
            <div className="container mt-2">
                <div className="row">
                    <h2>Home Page-Employees List</h2>
                    <div className="col col-12 col-sm-12 col-md-12">
                        <div className="row g-3 mt-3 mb-3">
                            {data.map(
                                (value,index)=>{
                                    return <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                                    <div class="card">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Id:{value.id}</li>
                                            <li class="list-group-item">Name:{value.name}</li>
                                            <li class="list-group-item">Email:{value.email}</li>
                                        </ul>
                                    </div>
                                </div>
                                }
                            )}
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home