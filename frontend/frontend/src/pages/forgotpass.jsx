import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Logic to send OTP to the entered email goes here
    // For example, you could make an API call to send the OTP
    setOtpSent(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white">
      <h4 className="text-white text-3xl mb-4">Forgot Password</h4>
      <div className="bg-white rounded-lg p-8 shadow-lg w-11/12 max-w-md">
        {!otpSent ? (
          <>
            <label htmlFor="email" className="text-gray-700 text-lg mb-2 block">Email:</label>
            <input 
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button 
              onClick={handleEmailSubmit}
              className="w-full p-3 bg-orange-500 text-white text-lg rounded hover:bg-orange-600 transition duration-300"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <label htmlFor="otp" className="text-gray-700 text-lg mb-2 block">Enter OTP:</label>
            <input 
              type="text"
              name="otp"
              id="otp"
              placeholder="Enter the OTP"
              className="text-gray-500 w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Link to="/forgotpass" className="w-full p-3 bg-orange-500 text-white text-lg rounded hover:bg-orange-600 transition duration-300">
              Confirm OTP and Proceed
            </Link>
            <>

        {/* Resend OTP button */}
        <button 
            onClick={() => { /* Logic for resending OTP */ }}
            className="w-full p-3 mt-4 bg-gray-500 text-white text-lg rounded hover:bg-gray-600 transition duration-300"
        >
            Resend OTP
        </button>
        </>

          </>
          

        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
