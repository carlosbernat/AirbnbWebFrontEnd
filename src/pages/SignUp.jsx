import logo from '../assets/logo1.png';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigator= useNavigate();
  const headers = {'Content-Type': 'application/json'};
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm();

  // const handleChange = ( setState ) => ( event ) => {
  //   setState(event);
  // }

  const onSubmit = async ({name, email, password}) => {
    try {
      const res = await axios.post(`http://localhost:3001/signUp`, {
        name,
        email,
        password
      },{ headers });
      if(res.status === 200){
        alert('Te has registrado correctamente');
        reset();
        navigator('/signIn');
      }
    } catch (error) {
      alert(error.response.data);
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
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('name',{ required: 'Name is required', minLength: {
                  value: 3,
                  message: 'It must contain at least 3 letters.'
                } })}
              />
              {errors.name && <p className='text-red-600 text-sm'>{errors.name.message}</p> }
            </div>
          </div>
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
            <div className="flex items-center justify-between mt-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm password
              </label>
              
            </div>
            <div className="mt-2">
              <input
                id="cPassword"
                name="cPassword"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("cPassword", {
                  required: "Password is required.",
                  minLength: {
                    value: 8,
                    message: "Password should be at least 8 characters."
                  },
                  validate: (value)=>{
                    if (watch('password') !== value) return 'Your password doesnt match';
                  }
                })}
              />
            </div>
            {errors.cPassword && <p className='text-red-600 text-sm'>{errors.cPassword.message}</p>}
          </div>

          <div>
            <button
            type='submit'
              className="flex w-full justify-center rounded-md bg-[#3b82f6] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#60a5fa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;