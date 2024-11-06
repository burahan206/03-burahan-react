import React, { useState, useEffect } from "react";
const User= () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem("employees"));
        if (storedEmployees) {
            setEmployees(storedEmployees);
        }
    }, []);
   
    return (
        <div className={"flex justify-center"}>
            <table className="w-full bg-white border border-gray-300 rounded" >
                <thead>
                    <tr>
                        <th className="p-1 text-left">Name</th>
                        <th className="p-1 text-left">Last Name</th>
                        <th className="p-1 text-left">Position</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr className="border-b" key={index}>
                            <td className="p-2">{employee.name}</td>
                            <td className="p-2">{employee.lastname}</td>
                            <td className="p-2">{employee.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default User;