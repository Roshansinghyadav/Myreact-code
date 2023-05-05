import React, { useState } from 'react';
import axios from 'axios';

function OtpForm() {
  const [mobile, setMobile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(mobile)) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }
    try {
      const response = await axios.post(
        'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
        { mobile: Number(mobile) }
      );
      console.log(response);
      setMobile('');
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to generate OTP. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mobile Number:
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </label>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button type="submit">Generate OTP</button>
    </form>
  );
}

export default OtpForm;
