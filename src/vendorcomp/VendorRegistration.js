import React, { useState, useRef, useEffect } from "react";

const VendorRegistration = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(59);
  const [resendDisabled, setResendDisabled] = useState(true);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleOtpChange = (element, index) => {
    if (/^\d*$/.test(element.value)) {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      if (element.value !== "" && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendOtp = () => {
    if (!resendDisabled) {
      setTimer(59);
      setResendDisabled(true);
      alert("OTP has been resent");
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) {
      alert("Please enter a 6-digit OTP");
      return;
    }
    alert(`Verifying OTP: ${enteredOtp}`);
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.formWrapper}>
        <h2
          style={{
            marginBottom: "30px",
            color: "#fff",
            fontFamily: "Faustina",
          }}
        >
          Vendor Sign Up
        </h2>

        <div style={{ marginBottom: "20px", width: "100%" }}>
          <label style={styles.label}>Enter Your Name</label>
          <div style={styles.inputBox}>
            <img
              src="../assets/user.png"
              alt="userIcon"
              style={{ width: "1rem" }}
            />
            <input
              type="text"
              placeholder="Enter Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
          </div>
        </div>

        <div style={{ marginBottom: "20px", width: "100%" }}>
          <label style={styles.label}>Enter 10 Digit Mobile Number</label>
          <div style={styles.phoneBox}>
            <div style={styles.phoneCode}>+91</div>
            <input
              type="text"
              maxLength={10}
              placeholder="Enter 10 Digit Contact Number"
              value={mobile}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "");
                setMobile(val);
              }}
              style={styles.phoneInput}
            />
          </div>
        </div>

        <div style={{ marginBottom: "20px", width: "100%" }}>
          <label style={{ ...styles.label, fontWeight: "bold" }}>
            Enter 6 Digit OTP
          </label>
          <div style={{ display: "flex", gap: "10px" }}>
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                name="otp"
                maxLength={1}
                value={data}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleOtpChange(e.target, index)}
                onKeyDown={(e) => handleOtpKeyDown(e, index)}
                style={styles.otpInput}
              />
            ))}
          </div>
          <div style={styles.resendContainer}>
            <span
              onClick={handleResendOtp}
              style={{
                color: resendDisabled ? "yellow" : "#FFA500",
                cursor: resendDisabled ? "default" : "pointer",
              }}
            >
              Resend OTP {resendDisabled ? `${timer}s` : ""}
            </span>
            <span style={{ color: "red", cursor: "pointer" }}>Support ?</span>
          </div>
        </div>

        <button onClick={handleVerifyOtp} style={styles.verifyButton}>
          Verify OTP
        </button>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    backgroundColor: "#023337",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    position: "relative",
    left: "-20%",
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "320px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    color: "#fff",
  },
  inputBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid white",
    borderRadius: "6px",
    padding: "8px 12px",
    width: "22rem",
    gap: "1rem",
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: "#fff",
    fontSize: "14px",
  },
  phoneBox: {
    display: "flex",
    border: "1px solid white",
    borderRadius: "6px",
    overflow: "hidden",
    color: "#fff",
    fontSize: "14px",
    width: "22rem",
  },
  phoneCode: {
    padding: "8px 12px",
    display: "flex",
    alignItems: "center",
    borderRight: "1px solid white",
    minWidth: "50px",
    justifyContent: "center",
  },
  phoneInput: {
    flex: 1,
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    color: "#fff",
    padding: "8px 12px",
    fontSize: "14px",
  },
  otpInput: {
    width: "50px",
    height: "40px",
    textAlign: "center",
    fontSize: "18px",
    borderRadius: "4px",
    border: "1px solid white",
    backgroundColor: "transparent",
    color: "#fff",
  },
  resendContainer: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    width: "100%",
  },
  verifyButton: {
    width: "60%",
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "white",
    color: "#0B2A3D",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "Faustina",
  },
};

export default VendorRegistration;
