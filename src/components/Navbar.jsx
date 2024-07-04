import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'
const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <>
    <nav className='flex flex-col lg:flex-row justify-around mx-6 py-3 mb-10 m-4'>
        <div>
            <h1 className='text-3xl font-bold text-orange-800'>Flavoro - Foods</h1>
            <h3 className='font-bold text-xl text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
        </div>
        <div>
            <input onChange={(e)=>dispatch(setSearch(e.target.value))} className='p-4 text-sm border border-gray-500 outline-none rounded-lg w-full lg:w-[35vw]' type="search" name="search" id="" placeholder='Search here' autoComplete='off'/>

        </div>
        <div className="buttons flex gap-3 py-2 hover:font-bold">
          <button className='bg-green-500 hover:bg-green-600  p-2 rounded-lg text-white font-bold'>Login</button>
          <button className='bg-blue-500 hover:bg-blue-600 p-2 rounded-lg text-white font-bold'>Register</button>
        </div>
    </nav>
    </>
    
  )
}

export default Navbar