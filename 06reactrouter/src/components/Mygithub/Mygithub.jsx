import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Mygithub = () => {
    const [data , setData] = useState("")
    useEffect(() => {
      fetch("https://api.github.com/users/gyanvendra2005")
      .then((res) => res.json())
      .then((data) => setData(data))
    }, [])
    
  return (
    <div className='text-center bg-gray-500 dark:bg-gray-800 dark:border-gray-700'>
       <h2 className='m-4 text-black dark:text-white p-4 text-3xl'>Username: {data.login}</h2>
       
       <div className=' flex flex-col items-center sm:mt-10 mb-10 dark:text-white '>
       <img  className=' rounded-full' width={200} src={data.avatar_url} alt="" />
          <div className='flex-auto'>
            <p>
            Name: {data.name}
            <br />
            Followers: {data.followers}
            <br />
            Location: {data.location}
            </p>
       </div>
       <Link
       className='block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-white dark:text-blue-500'
       to={`https://github.com/gyanvendra2005`}
      >
        Click to visit profile
      </Link>
       </div>
        
    </div>
  )
}

export default Mygithub
