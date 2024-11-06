import React from 'react'
import profileImage from '../assets/img/bu.jpg'


const Owner = () => {
  return (
    <>

    <div className="  min-h-90vh bg-gray-100 p-8">

      <div className="text-center items-center">
        <h1 className="text-3xl font-bold mb-4">Burahan-Group A - JSD8 </h1>

    
        <img src={profileImage} alt="Profile" className="w-48 h-48 mx-auto object-cover mb-4"  />

     </div>

   
        <h2 className="font-semibold mb-2">Short Biography:</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          My name is Burahan . i'm from yala
        </p>
    </div>
    </>
  )
}

export default Owner