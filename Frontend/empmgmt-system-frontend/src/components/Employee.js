import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const Employee = ({employee, deleteEmployee}) => {

    const navigate = useNavigate();

    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    };

    return (
    <tr key={employee.id}>
                        <td className="text-left px-5 py-1 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{employee.firstName}</div>
                        </td>
                        <td className="text-left px-5 py-1 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{employee.lastName}</div>
                        </td>
                        <td className="text-left px-5 py-1 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{employee.emailId}</div>
                        </td>
                        <td className="text-right px-5 py-1 whitespace-nowrap font-medium text-sm">
                            <a href="#" onClick={(e, id) => editEmployee(e, employee.id)} className="text-green-600 hover:text-green-800 px-4 hover:cursor-pointer">Edit</a>
                            <a onClick={(e, id) => deleteEmployee(e, employee.id)} className="text-green-600 hover:text-green-800 px-4 hover:cursor-pointer">Delete</a>
                        </td>
                    </tr>
    );
};

export default Employee
