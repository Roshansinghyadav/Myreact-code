import React, { useState } from "react";

 export function MyApp() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile: mobile })
    };
    fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", requestOptions)
      .then(response => {
        if (response.ok) {
          setOtp("");
          setError("");
        } else {
          throw new Error(response.statusText);
        }
      })
      .catch(error => {
        setError("Failed to generate OTP: " + error.message);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="mobile">Mobile number:</label>
        <input type="tel" id="mobile" name="mobile" value={mobile} onChange={handleMobileChange} pattern="[1-9][0-9]{9}" required />
        <button type="submit">Generate OTP</button>
      </form>
      {error && <p>{error}</p>}
      {otp && (
        <form>
          <label htmlFor="otp">OTP:</label>
          <input type="text" id="otp" name="otp" value={otp} onChange={handleOtpChange} maxLength={6} required />
        </form>
      )}
    </div>
  );
}

export default MyApp;





