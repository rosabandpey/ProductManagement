import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'
import { loginAPI } from '../services/api'

const ERROR_MESSAGES = {
  'Missing password': 'گذرواژه خالی می‌باشد!',
  'Missing email': 'ایمیل خالی می‌باشد!',
  'user not found': 'کاربری با این مشخصات یافت نشد!',
}

const LoginPage = () => {
  const [data, setData] = useState({
    email: null,
    password: null,
  })
  const [error, setError] = useState('')

  const handleChangeInput = (event) => {
    console.debug({ [event.target.name]: event.target.value })
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }
  const { toggleAuth, user } = useAuth()
  const history = useHistory()

  useEffect(() => {
    if (user.loggedIn) {
      history.push('/dashboard')
    }
  }, [user])

  const handleLogin = (event) => {
    event.preventDefault()

    loginAPI({
      email: data.email,
      password: data.password,
    })
      .then(() => {
        toggleAuth()
        history.push('/dashboard')
      })
      .catch((err) => setError(() => err.response.data.error))
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          {error && (
            <div className="alert alert-danger" role="alert">
              {ERROR_MESSAGES[error] ?? error}
            </div>
          )}
          <div className="card py-4">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">ایمیل</label>
                <input
                  onChange={handleChangeInput}
                  type="email"
                  className="form-control"
                  dir="ltr"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">گذرواژه</label>
                <input
                  onChange={handleChangeInput}
                  type="password"
                  className="form-control"
                  dir="ltr"
                  name="password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                ورود
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
