import logo from '../assets/logo1.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { signIn } from '../context/reducer';

function SignIn() {
  const navigator= useNavigate();
  const headers = {'Content-Type': 'application/json'};
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      const res = await axios.post(`http://localhost:3001/signIn`, {
        email,
        password
      },{ headers });
      if(res.status === 200){
        dispatch(signIn(res.data));
        navigator(-1);
        reset();
      }
    } catch (error) {
      alert(error.response);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="object-cover -my-10"
          src={logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('email', {required: 'Email is required', pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is invalid'
                }})}
              />
              {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p> }
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="./"
                  className="font-semibold text-[#60a5fa] hover:text-[#60a5fa]"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 8,
                    message: "Password should be at least 8 characters."
                  }
                })}
              />
              {errors.password && <p className='text-red-600 text-sm'>{errors.password.message}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#3b82f6] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#60a5fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to="/signUp"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            &nbsp;Sign up!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
