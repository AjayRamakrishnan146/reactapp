import React, { useState } from 'react'

const EmployeeRegister = () => {
    const [status,changeStatus]=useState(true)

    const changeData=()=>{
        changeStatus(false);
    }


    return (
        <div>

            <div className="container mt-5 mb-3">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="row g-3 border border-primary p-5">
                                <h2>Employee Registration</h2>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <label htmlFor="" className="form-label">Name</label>
                                    <input type="text" className="form-control" onChange={changeData} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <label htmlFor="" className="form-label">Designation</label>
                                    <input type="text" className="form-control" onChange={changeData}/>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <label htmlFor="" className="form-label">Location</label>
                                    <input type="text" className="form-control" onChange={changeData}/>
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <label htmlFor="" className="form-label">Salary</label>
                                    <input type="number" className="form-control" onChange={changeData}/>

                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <button className="btn btn-success">Register</button>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    { status ?(<p>Fill all the fields in the form</p>) :(<p></p>)}
                                    {/* <p>Fill all the fields in the form</p> */}
                                </div>
                            </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EmployeeRegister