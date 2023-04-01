import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

const ProtectRoute = () => {
  const  {token} = useSelector((state) => state.auth)
  
  if (token){
    return (
      <div className='absolute top-[50%] text-xl left-[50%]' style={{"transform" : "translate(-50%,-50%)"}}>
        <h1>Unauthorized :(</h1>
        <span>
          try <Link to='/login'><span className='text-[#00b7ff] underline'>Login</span></Link> to gain access
        </span>
      </div>
    )
  }

  return <Outlet />
}
export default ProtectRoute