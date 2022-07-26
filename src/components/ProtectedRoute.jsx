import { useAuth } from '../contexts/Auth'
import React from 'react'
import { Redirect, Route,useHistory ,useLocation} from 'react-router-dom'

const ProtectedRoute = (props) => {
  //TODO
  const {user } = useAuth()
 
  {if (user.loggedIn)
  {
    return <Route {...props} />
  }else{
    return <Redirect from={props.path} to='/login' />
  }
  }
}

export default ProtectedRoute
