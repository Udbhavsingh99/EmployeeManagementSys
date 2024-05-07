import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
                id:"",
                firstName:"",
                lastName:"",
                emailId:""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value});
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response) => {
            console.log(response);
            navigate("/employeeList");
        }).catch((error) => {
            console.log(error);
        });
    };

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id:"",
                firstName:"",
                lastName:"",
                emailId:""
        });
    };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
            <div className="font-thin text-xl tracking-wider ">
               <h1>Add New Employee</h1>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">First Name</label>
                <input type="text" name="firstName" value={employee.firstName} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal mt-5">Last Name</label>
                <input type="text" name="lastName" value={employee.lastName} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal mt-5">Email</label>
                <input type="email" name="emailId" value={employee.emailId} onChange={(e) => handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>


            <div className="items-center justify-center h-14 w-full my-4 space-x-5 pt-4">
                <button onClick={saveEmployee} className="rounded text-white font-semibold bg-red-700 py-1 px-5 hover:bg-red-500">
                    Save
                </button>
                <button onClick={reset} className="rounded text-white font-semibold bg-blue-700 py-1 px-5 hover:bg-blue-500">
                    Clear
                </button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee

