import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-100">
      <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-4xl overflow-hidden">
        {/* Left: Login Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Login</h2>
          <p className="text-gray-500 mb-6">
            If You Are Already A Member, Easily Log In
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                />
                <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
                  {/* Eye icon (optional, static) */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Login
            </button>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-400">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg bg-white hover:bg-gray-100 transition duration-200"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-5 w-5 mr-2"
              />
              Login with Google
            </button>
            <div className="flex justify-between mt-4 text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot my password
              </a>
            </div>
            <div className="mt-6 text-center text-gray-500 text-sm">
              If You Don't Have An Account, Create{" "}
              <button className="ml-2 px-4 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                Register
              </button>
            </div>
          </form>
        </div>
        {/* Right: Image */}
        <div className="hidden md:block w-1/2 bg-blue-900 flex items-center justify-center">
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/media/7ed7d5ca074b6c1b5b2b6c1a68e4b8e7.png"
            alt="Login Illustration"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;