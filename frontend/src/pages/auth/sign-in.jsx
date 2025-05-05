import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

export function SignIn() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailOrUsername,
          password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store user data in localStorage or context
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Redirect to dashboard or home page
      navigate('/dashboard/home');
    } catch (err) {
      setError(err.message || 'Something went wrong');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="m-8 flex justify-center bg">
      <div className="lg:w-3/5 flex flex-col items-center rounded-lg pt-10 pb-10">
        <img src={"/img/kpec.png"} alt="brand" className="h-28 mb-4" />
        <div className="text-center w-full">
          <Typography variant="h2" className="font-bold">
            Log In
          </Typography>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg lg:w-1/2">
          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Email or Username
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com or username"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
              className: "before:content-none after:content-none",
              }}
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}            
            />
          </div>
          <Button 
            type="submit" 
            className="mt-6" 
            fullWidth
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>

          <div className="text-right mt-6">
            <Typography variant="small" className="font-medium text-gray-900">
              <a href="#">Forgot Password?</a>
            </Typography>
          </div>
          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            {/* Not registered?
            <Link to="/auth/sign-up" className="text-gray-900 ml-1">
              Create account
            </Link> */}
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default SignIn;