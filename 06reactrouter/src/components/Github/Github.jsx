import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Github() {
    const {username} = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch(`https://api.github.com/users/${username}`)
     .then((res) => res.json())
     .then((data) => setData(data))
    }, [username])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      Github account of {data.name}
      <div className='grid  place-items-center sm:mt-20 mb-10'>
      <img  className='m-50' width={250} src={data.avatar_url} alt="" />
      <label className='text-black text-4xl'> Profile photo</label>
      </div>
      Username: {data.login} <br />
      UserId: {data.id} <br />
      Followers: {data.followers} <br />
      Followings: {data.following} <br />
      Location: {data.location} <br />
      <Link
       className='block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-blue-500'
       to={`https://github.com/${username}`}
      >
        Click to visit profile
      </Link>
      
    </div>
  )
}

export default Github
