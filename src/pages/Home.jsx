import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const  auth= useSelector((state) => state.auth)

  return (
    <div>Home

      {JSON.stringify(auth)}
    </div>
  )
}

export default Home