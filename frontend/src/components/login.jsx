import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', { username, password, rememberMe });
  };

  return (
    <div className='h-screen flex'>
      <div className='bg-red-500 w-1/2'></div>
      <div className='w-1/2 p-16'>
        <h1 className='text-5xl font-bold mb-4'>Login</h1>
        <h2 className='text-slate-500 text-lg font-light mb-5'>
          Welcome to My Mini Project! Please confirm your account.
        </h2>

        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label className='text-slate-500 text-sm'>User</label>
          <input
            className='border mt-1 py-3 px-2 outline-0 rounded font-extralight'
            type='text'
            placeholder='Enter your username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className='text-slate-500 text-sm mt-5 font-extralight'>Password</label>
          <input
            className='border mt-1 py-3 px-2 outline-0 rounded font-extralight'
            type='password'
            placeholder='Enter your password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className='grid grid-cols-2 mt-5 font-extralight'>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className='text-slate-500'>Remember Me</span>
            </div>
            <div className='text-right'>
              <a href='#' className='text-slate-500'>Forgot Password?</a>
            </div>
          </div>

          <button type='submit' className='bg-red-500 py-3 mt-5 rounded text-white font-bold uppercase'>
            Login
          </button>
        </form>

        <div className='flex gap-1 mt-5'>
          <h1 className='font-extralight'>New Here?</h1>
          <a href='#' className='font-medium'>Signup</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
