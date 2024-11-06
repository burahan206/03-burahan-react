import React, { useState } from 'react'; // เพิ่มการ import useState
import FormEmp from '../components/FormEmp';
import User from '../components/User';


const Home = () => {
    const [selectedSector, setSelectedSector] = useState(''); // state สำหรับเลือก sector

    return (
      <div className="min-h-screen max-h-screen overflow-y-auto">
        
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2">Generation Thailand</h1>
            <h2 className="text-3xl font-bold">Home - User Sector</h2>
          </div>

          {/* ปุ่มเลือก Sector */}
          <div className="flex justify-center space-x-8 mb-12">
            <button 
              className={`px-6 py-3 rounded-md shadow-md transition-shadow duration-200 ease-in-out ${selectedSector === 'user' ? 'bg-blue-500 text-white' : 'bg-white'}`}
              onClick={() => setSelectedSector('user')}
            >
              User Home Sector
            </button>
            
            <button 
              className={`px-6 py-3 rounded-md shadow-md transition-shadow duration-200 ease-in-out ${selectedSector === 'admin' ? 'bg-blue-500 text-white' : 'bg-white'}`}
              onClick={() => setSelectedSector('admin')}
            >
              Admin Home Sector
            </button>
          </div>

          {/* หาก selectedSector เป็น 'user' จะทำการ render คอมโพเนนต์ User */}
          {/* หาก selectedSector เป็น 'admin' จะทำการ render คอมโพเนนต์ FormEmp*/}
          <div>
            {selectedSector === 'user' && <User />}   
            {selectedSector === 'admin' && <FormEmp />}
          </div>
        </main>
      </div>
    );
};

export default Home;
