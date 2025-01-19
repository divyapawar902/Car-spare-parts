import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Logic to validate old password, new password, and confirmation goes here
    if (newPassword === confirmPassword) {
      // API call to reset password
      console.log('Password updated successfully');
      // Redirect or show a success message
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-700 to-gray-900 text-white">
      <h4 className="text-white text-3xl mb-4">Reset Password</h4>
      <div className="bg-white rounded-lg p-8 shadow-lg w-11/12 max-w-md">
        <label htmlFor="oldPassword" className="text-gray-700 text-lg mb-2 block">Old Password:</label>
        <input 
          type="password"
          name="oldPassword"
          id="oldPassword"
          placeholder="Enter your old password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <label htmlFor="newPassword" className="text-gray-700 text-lg mb-2 block">New Password:</label>
        <input 
          type="password"
          name="newPassword"
          id="newPassword"
          placeholder="Enter your new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <label htmlFor="confirmPassword" className="text-gray-700 text-lg mb-2 block">Confirm New Password:</label>
        <input 
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        {!passwordMatch && (
          <p className="text-red-500 text-sm">Passwords do not match. Please try again.</p>
        )}
        <button 
          onClick={handlePasswordSubmit}
          className="w-full p-3 bg-orange-500 text-white text-lg rounded hover:bg-orange-600 transition duration-300"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
