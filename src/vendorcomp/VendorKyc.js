import React, { useState } from "react";

const VendorKyc = () => {
  const [formData, setFormData] = useState({
    name: "",
    panNumber: "",
    aadharNumber: "",
    panCardFront: null,
    aadharCardFront: null,
    aadharCardBack: null,
    gstCertificate: null,
    profileImage: null,
    emergencyContact: "",
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
    // Handle back button logic here
    alert("Back button clicked");
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Handle next button logic here, like form validation or submission
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
        KYC Details
      </h2>
      <form onSubmit={handleNext} style={styles.formWrapper}>
        <div style={styles.row}>
          <div style={{ width: "60%" }}>
            <label style={styles.label}>Name</label>

            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                placeholder="Enter Name on Document"
              />
            </div>
          </div>

          <div style={{ width: "40%" }}>
            <label style={styles.label}>PAN Number</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                placeholder="Enter PAN Number"
              />
            </div>
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Enter Aadhar Number</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                placeholder="Enter Aadhar Number"
              />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Upload PAN Card</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="file"
                placeholder="Enter Owner Name"
              />
            </div>
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Aadhar Card Front Side Upload</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="file"
                placeholder="Upload Front Side Upload"
              />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Aadhhar Card Back Side Upload</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="file"
                placeholder="Upload Aadhar Card"
              />
            </div>
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ ...styles.inputGroup, flex: 1 }}>
            <label style={styles.label}>GST Certificate Upload</label>
            <input
              type="file"
              name="gstCertificate"
              accept="image/*,application/pdf"
              onChange={handleChange}
              style={{ ...styles.inputFile, width: "100%" }}
              required
              placeholder="Upload GST Certificate"
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Profile Image</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="file"
                placeholder="Upload Front Side Upload"
              />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Emergency Contact Number</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                placeholder="Enter Contact Number"
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
    width: "100%",
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
  inputFile: {
    padding: "8px 10px",
    borderRadius: 4,
    border: "1px solid #28a2dc",
    backgroundColor: "transparent",
    color: "white",
    fontSize: "1rem",
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

export default VendorKyc;
