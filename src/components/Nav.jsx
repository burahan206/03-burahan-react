import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
     <nav >
        <ul className={'flex justify-end space-x-3'}>
            <li className='px-4 py-2 rounded m-2 bg-blue-500 text-white' ><Link to="/">Home</Link></li>
            <li className='px-4 py-2 rounded m-2 bg-blue-500 text-white' ><Link to="/Owner">Owner</Link></li>
        </ul>
     </nav>
  )
}

export default Nav