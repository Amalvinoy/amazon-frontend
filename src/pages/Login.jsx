import { useState } from 'react';
import { loginUserAPI } from '../services/allAPIs';
import { useNavigate } from "react-router-dom";

export default function AmazonLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setError('');
    setSuccess('');
  };

  const navigate = useNavigate();
  const handleLogin = async () => {
    setLoading(true);
    setError('');
    setSuccess('');
    if (!form.email || !form.password) {
      setError('Both fields are required.');
      setLoading(false);
      return;
    }
    try {
      const res = await loginUserAPI({ email: form.email, password: form.password });
      if (res?.data?.success) {
        setSuccess('Login successful!');
        // Optionally, store token or user info here
      } else {
        setError(res?.data?.message || 'Login failed.');
      }
      // Redirect to home page
      navigate("/");
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center">
      {/* Logo */}
      <div className="mt-5 mb-5">
        <a href="#" className="inline-block">
          <svg className="w-26 h-8" viewBox="0 0 103 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M66.7 23.8c-6.2 4.6-15.2 7-22.9 7-10.8 0-20.6-4-28-10.7-.6-.5-.1-1.2.6-.8 7.9 4.6 17.6 7.4 27.7 7.4 6.8 0 14.2-1.4 21.1-4.3 1-.4 1.9.7.9 1.4z" fill="#FF9900"/>
            <path d="M69.1 21.1c-.8-1-5.2-.5-7.2-.2-.6.1-.7-.5-.2-.9 3.5-2.5 9.3-1.8 10-.9.7.9-.2 6.7-3.5 9.5-.5.4-1 .2-.8-.4.8-1.9 2.5-6.1 1.7-7.1z" fill="#FF9900"/>
            <path d="M61.9 5.3V3.1c0-.3.2-.5.5-.5h9.3c.3 0 .5.2.5.5v1.9c0 .3-.2.6-.5.9l-4.8 6.9c1.8 0 3.7.2 5.3 1.1.4.2.5.5.5.8v2.4c0 .3-.3.6-.6.4-2.5-1.3-5.8-1.4-8.6 0-.3.1-.6-.1-.6-.4v-2.3c0-.3 0-.9.3-1.4l5.6-8H62.4c-.3 0-.5-.2-.5-.5zM22.4 17.2h-3c-.3 0-.5-.2-.5-.5V3.2c0-.3.2-.5.5-.5h2.8c.3 0 .5.2.5.5v1.7h.1c.7-1.7 2-2.5 3.8-2.5 1.8 0 2.9.8 3.7 2.5.7-1.7 2.4-2.5 4-2.5 1.2 0 2.5.5 3.3 1.6.9 1.2.7 2.9.7 4.4v8.8c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5V9.4c0-.6.1-2.1-.1-2.7-.3-1-.9-1.3-1.8-1.3-.7 0-1.5.5-1.8 1.3-.3.8-.3 2.1-.3 2.7v7.8c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5V9.4c0-1.6.3-4-.9-5.3-.4-.5-1.1-.8-1.7-.8-.7 0-1.4.5-1.7 1.2-.4.8-.4 1.6-.4 2.4v10.3c-.2.3-.4.5-.7.5zM85.9 2.4c4.4 0 6.8 3.8 6.8 8.6 0 4.6-2.6 8.4-6.8 8.4-4.3 0-6.7-3.8-6.7-8.5 0-4.7 2.4-8.5 6.7-8.5zm0 3.1c-2.2 0-2.3 3-2.3 4.8 0 1.9 0 5.8 2.3 5.8 2.2 0 2.4-3.1 2.4-5 0-1.2-.1-2.8-.4-4-.3-1-.8-1.6-1.9-1.6zm12.2 11.7h-3c-.3 0-.5-.2-.5-.5V3.2c0-.3.2-.5.5-.5h2.8c.2 0 .4.2.5.4v2h.1c.8-1.8 2-2.7 3.9-2.7 1.3 0 2.5.5 3.3 1.7.7 1.1.7 2.9.7 4.2v8.9c0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5V9.6c0-1.6.2-4-1.8-4-1.5 0-1.9 1.1-2.2 2.2-.1.3-.1.6-.1.9v8.5c-.1.2-.3.4-.6.4z" fill="#221F1F"/>
            <path d="M43.5 17.2c-.2 0-.4-.2-.5-.4l-5.5-14.5c-.1-.2 0-.5.3-.5h3c.2 0 .4.1.4.3l3.4 9.8h.1l3.4-9.8c.1-.2.2-.3.4-.3h3c.2 0 .4.2.3.5l-5.5 14.5c-.1.2-.3.4-.5.4h-2.3z" fill="#221F1F"/>
          </svg>
        </a>
      </div>

      <div className="bg-white border border-gray-300 rounded px-7 py-5 w-full max-w-sm mb-5">
        <h1 className="text-3xl font-normal mb-3">Sign in</h1>
        
        <div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-1 text-gray-900">
              Email or mobile phone number
            </label>
            <input
              type="text"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="w-full h-8 px-2 py-1 text-sm border border-gray-400 rounded focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 shadow-inner"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-1 text-gray-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              className="w-full h-8 px-2 py-1 text-sm border border-gray-400 rounded focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 shadow-inner"
            />
          </div>


          {error && <div className="text-red-600 text-xs mb-2">{error}</div>}
          {success && <div className="text-green-600 text-xs mb-2">{success}</div>}

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className={`w-full h-8 bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-600 rounded text-sm text-gray-900 hover:from-yellow-300 hover:to-yellow-500 mt-2 shadow-sm ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Logging in...' : 'Continue'}
          </button>

          <div className="text-xs text-gray-900 mt-4 leading-relaxed">
            By continuing, you agree to Amazon's{' '}
            <a href="#" className="text-blue-600 hover:text-orange-700 hover:underline">
              Conditions of Use
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:text-orange-700 hover:underline">
              Privacy Notice
            </a>.
          </div>

          <div className="mt-4">
            <div className="flex items-center cursor-pointer text-sm text-gray-900">
              <span className="inline-block w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-600 mr-2"></span>
              <a href="#" className="text-blue-600 hover:text-orange-700 hover:underline">
                Need help?
              </a>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-300">
            <h5 className="text-sm font-bold mb-1">Buying for work?</h5>
            <a href="#" className="text-sm text-blue-600 hover:text-orange-700 hover:underline">
              Shop on Amazon Business
            </a>
          </div>
        </div>
      </div>

      {/* New to Amazon Section */}
      <div className="text-center my-4 w-full max-w-sm">
        <div className="flex items-center mb-4 text-xs text-gray-500">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <span className="px-2">New to Amazon?</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
        <button className="w-full h-8 bg-gradient-to-b from-gray-50 to-gray-200 border border-gray-400 rounded text-sm text-gray-900 hover:from-gray-200 hover:to-gray-300 shadow-sm">
          <a href="/register">Create your Amazon account</a>
        </button>
      </div>
      <div className="text-center text-xs text-gray-500 my-4">or</div>

      <button className="w-full max-w-sm h-8 bg-white border border-gray-300 rounded text-sm text-gray-900 hover:bg-gray-50 flex items-center justify-center gap-2 shadow-sm">
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Login with Google
      </button>

      <footer className="mt-auto pt-5 pb-5 text-center w-full bg-gradient-to-b from-gray-200/40 to-transparent">
        <div className="flex justify-center gap-5 mb-2">
          <a href="#" className="text-xs text-blue-600 hover:text-orange-700 hover:underline">
            Conditions of Use
          </a>
          <a href="#" className="text-xs text-blue-600 hover:text-orange-700 hover:underline">
            Privacy Notice
          </a>
          <a href="#" className="text-xs text-blue-600 hover:text-orange-700 hover:underline">
            Help
          </a>
        </div>
        <div className="text-xs text-gray-600">
          © 1996-2024, Amazon.com, Inc. or its affiliates
        </div>
      </footer>
    </div>
  );
}