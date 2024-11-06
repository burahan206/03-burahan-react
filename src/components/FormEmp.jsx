import React, { useState, useEffect } from "react";

const FormEmp = () => {
    const [name, setName] = useState("");         //ใช้ ีuseState เก็บข้อมูล name, lastname, position จาก Form
    const [lastname, setLastname] = useState("");
    const [position, setPosition] = useState("");
    const [employees, setEmployees] = useState([]);  // เอาข้อมูลทั้งหมดใส่ใน  employees เป็น arr

    
    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem("employees")); // ดึงข้อมูลพนักงานที่เก็บไว้ใน localStorage และ แปลงข้อมูลจาก JSON กลับเป็น JavaScript object
        if (storedEmployees) {                                           //ถ้ามีข้อมูลพนักงานใน localStorage, ก็จะนำมาเซ็ตลงใน state employees        
            setEmployees(storedEmployees);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();       //ป้องกันไม่ให้ฟอร์มรีเฟรชหน้าเว็บ
        const newEmployee = { name, lastname, position }; //สร้างobject newEmployee ที่ประกอบด้วย name, lastname, และ position จาก state
        const updatedEmployees = [...employees, newEmployee];//อัปเดตอาเรย์ employees โดยเพิ่มพนักงานใหม่เข้าไป (updatedEmployees)
        setEmployees(updatedEmployees);
        localStorage.setItem("employees", JSON.stringify(updatedEmployees)); //เซ็ต employees ใหม่ใน state และบันทึกข้อมูลใน localStorage โดยแปลงอาเรย์ให้เป็น JSON ด้วย JSON.stringify()
        setName("");
        setLastname("");  //รีเซ็ตฟอร์มให้เป็นค่าว่างหลังจากเพิ่มข้อมูลเสร็จ
        setPosition("");
    };

    // Handle delete employee
    const handleDelete = (index) => {
        const updatedEmployees = employees.filter((_, i) => i !== index); //สร้างอาเรย์ใหม่ที่ไม่รวมพนักงานที่มี index ตรงกับที่เลือก
        setEmployees(updatedEmployees);                                    //อัปเดต state employees
        localStorage.setItem("employees", JSON.stringify(updatedEmployees)); //อัปเดตข้อมูลใน localStorage 
    };

    return (
        <>
        <div className={"flex justify-center"}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={"p-2 border border-gray-300 rounded m-3"}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className={"p-2 border border-gray-300 rounded m-3"}
                />
                <input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className={"p-2 border border-gray-300 rounded m-3"}
                />
                <button className='px-4 py-2 rounded m-2 bg-blue-500 text-white' type="submit">Add Employee</button>
            </form>
         </div>
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
                            <td className="p-2">
                                <button  className='px-4 py-2 rounded m-2 bg-blue-500 text-white' onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default FormEmp;
