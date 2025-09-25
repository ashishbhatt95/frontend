import React, { useState } from "react";

const VendorPayment = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    ifscCode: "",
    accountHolderName: "",
    accountNumber: "",
    confirmAccountNumber: "",
    cancelCheck: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBack = () => {
    alert("Back button clicked");
  };

  const handleNext = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Next clicked, check console for form data");
  };

  return (
    <div style={styles.mainContainer}>
      <h2
        style={{
          marginBottom: "30px",
          color: "#fff",
          fontFamily: "Faustina",
          textAlign: "center",
        }}
      >
        Payment & Bank
      </h2>
      <form onSubmit={handleNext} style={styles.formWrapper}>
        <div style={styles.row}>
          <div style={{ width: "60%" }}>
            <label style={styles.label}>Bank Name</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                placeholder="Select Bank"
              />
            </div>
          </div>

          <div style={{ width: "40%" }}>
            <label style={styles.label}>IFSC Code</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                placeholder="Enter IFSC Code"
              />
            </div>
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Account Holder Name</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                name="accountHolderName"
                value={formData.accountHolderName}
                onChange={handleChange}
                placeholder="Enter Holder Name"
              />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Upload Cancel Cheque</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="file"
                name="cancelCheck"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Account Number</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                placeholder="Enter Account Number"
              />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Confirm Account Number</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                name="confirmAccountNumber"
                value={formData.confirmAccountNumber}
                onChange={handleChange}
                placeholder="Confirm Account Number"
              />
            </div>
          </div>
        </div>

        <div style={styles.buttonRow}>
          <button type="button" onClick={handleBack} style={styles.backButton}>
            Back
          </button>
          <button type="submit" style={styles.nextButton}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  mainContainer: {
    backgroundColor: "#023337",
    display: "flex",
    flexDirection: "column",
    width: "80vw",
    height: "100%",
    position: "relative",
    padding: "10px 30px",
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
  },
  row: {
    display: "flex",
    gap: "20px",
    width: "100%",
  },
  inputBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid white",
    borderRadius: "6px",
    padding: "8px 12px",
    width: "100%",
    gap: 10,
  },
  label: {
    display: "block",
    marginBottom: "8px",
    color: "#fff",
    fontFamily: "Lato",
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: "#fff",
    fontSize: "14px",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "end",
    marginTop: 10,
    gap: 20,
  },
  backButton: {
    backgroundColor: "transparent",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
    fontFamily: "Faustina",
    border: "none",
  },
  nextButton: {
    backgroundColor: "white",
    color: "#023337",
    fontFamily: "Faustina",
    border: "none",
    padding: "8px 24px",
    borderRadius: 4,
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
  },
};

export default VendorPayment;
