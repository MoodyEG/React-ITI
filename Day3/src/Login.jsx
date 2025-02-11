import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const initialValues = {
    email: '',
    password: '',
  };

  const [apiError, setApiError] = useState(null);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,30})/,
        'Must contain 1 capital, 1 small, 1 number and 1 special character'
      )
      .required('Password is required'),
  });

  async function login(values) {
    try {
      setApiError(null);
      const res = await axios.post('http://localhost:5124/user/login', values);
      console.log(res);
      // moody@email.com
      // Pass@123

      if (res.status === 200) {
        navigate('/home');
      }
    } catch (error) {
      console.error(error.response.data);
      setApiError(error.response.data.error);
    }
  }

  const registerationForm = useFormik({
    initialValues,
    validationSchema,
    onSubmit: login,
  });

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8  ">
            <form onSubmit={registerationForm.handleSubmit}>
              <h2 className="text-center text-white fw-bold">Login</h2>

              {apiError ? (
                <div className="alert alert-danger" role="alert">
                  {apiError}
                </div>
              ) : (
                ''
              )}

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={registerationForm.handleChange}
                  value={registerationForm.values.email}
                  placeholder="Email address"
                />
                <label htmlFor="email" className="">
                  Email address
                </label>
              </div>
              {registerationForm.touched.email &&
              registerationForm.errors.email ? (
                <div className="alert alert-danger" role="alert">
                  {registerationForm.errors.email}
                </div>
              ) : (
                ''
              )}

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={registerationForm.handleChange}
                  value={registerationForm.values.password}
                  placeholder="Password"
                />
                <label htmlFor="password" className="">
                  Password
                </label>
              </div>
              {registerationForm.touched.password &&
              registerationForm.errors.password ? (
                <div className="alert alert-danger" role="alert">
                  {registerationForm.errors.password}
                </div>
              ) : (
                ''
              )}
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
