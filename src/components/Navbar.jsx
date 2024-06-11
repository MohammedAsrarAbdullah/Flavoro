import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/SearchSlice'
const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <>
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10'>
        <div>
            <h3 className='font-bold text-xl text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
            <h1 className='text-2xl'>Flavoro - Foods</h1>
        </div>
        <div>
            <input onChange={(e)=>dispatch(setSearch(e.target.value))} className='p-3 text-sm border border-gray-500 outline-none rounded-lg w-full lg:w-[25vw]' type="search" name="search" id="" placeholder='Search here' autoComplete='off'/>
        </div>
    </nav>
    </>
    
  )
}

export default Navbar