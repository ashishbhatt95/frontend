import React, { useState } from "react";

const VendorDetailsForm = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  const [altNumber, setAltNum] = useState("");
  const [wpNumber, setWpNumber] = useState("");
  const [email, setEmail] = useState("");
  const [adressF, setAdressF] = useState("");
  const [adressS, setAdressS] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [sameResidential, setSameResidential] = useState(false);
  const [sadressF, setsAdressF] = useState("");
  const [sadressS, setsAdressS] = useState("");
  const [sstate, setsState] = useState("");
  const [scity, setsCity] = useState("");
  const [spincode, setsPincode] = useState("");

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
        Vendor Details
      </h2>

      <form style={styles.formWrapper}>
        <div style={styles.row}>
          <div style={{ width: "60%" }}>
            <label style={styles.label}>Enter Your Name *</label>

            <div style={styles.inputBox}>
              <img
                src="../assets/user.png"
                alt="userIcon"
                style={{ width: "1rem" }}
              />
              <input
                style={styles.input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Owner Name"
              />
            </div>
          </div>

          <div style={{ width: "40%" }}>
            <label style={styles.label}>Date of Birth *</label>
            <div style={{ position: "relative", ...styles.inputBox }}>
              <input
                type="text"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                onFocus={(e) => e.target.showPicker?.()}
                placeholder="Age Must be 18+"
                style={{
                  ...styles.input,
                  paddingRight: "2rem",
                }}
              />
              <img
                src="../assets/calendar.png"
                alt="calendarIcon"
                style={{
                  position: "absolute",
                  right: "0.5rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "1rem",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Contact Number *</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                placeholder="Enter 10 digit number"
                maxLength={10}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <label style={styles.label}>Alt. Contact Number</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                placeholder="Optional"
                maxLength={10}
                value={altNumber}
                onChange={(e) => setAltNum(e.target.value)}
              />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <label style={styles.label}>WhatsApp Number</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                placeholder="Optional"
                maxLength={10}
                value={wpNumber}
                onChange={(e) => setWpNumber(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Email Address *</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <h3 style={{ color: "#F9E813", marginTop: "20px", fontSize: "1rem" }}>
          Residential Address
        </h3>
        <div>
          <div style={{}}>
            <label style={styles.label}>Address Line 1 *</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={adressF}
                onChange={(e) => setAdressF(e.target.value)}
                placeholder="Enter House Number, Road Number"
              />
            </div>
          </div>
          <div style={{}}>
            <label style={styles.label}>Address Line 2</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={adressS}
                onChange={(e) => setAdressS(e.target.value)}
                placeholder="Enter House Number, Road Number"
              />
            </div>
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>State *</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>City *</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Pin Code *</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                maxLength={6}
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label style={{ color: "#F9E813", marginRight: 10 }}>
            Same as residential address
          </label>
          <input
            type="checkbox"
            checked={sameResidential}
            onChange={(e) => setSameResidential(e.target.checked)}
            style={{
              accentColor: sameResidential ? "#F9E813" : "#ffffff",
            }}
          />
        </div>
        <div>
          <div style={{}}>
            <label style={styles.label}>Address Line 1 *</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={adressF}
                onChange={(e) => setAdressF(e.target.value)}
                placeholder="Enter House Number, Road Number"
              />
            </div>
          </div>
          <div style={{}}>
            <label style={styles.label}>Address Line 2</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={adressS}
                onChange={(e) => setAdressS(e.target.value)}
                placeholder="Enter House Number, Road Number"
              />
            </div>
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>State *</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>City *</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label style={styles.label}>Pin Code *</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                maxLength={6}
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "end",
            gap: 20,
            marginTop: "20px",
          }}
        >
          <button
            type="button"
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              fontFamily: "Faustina",
              border: "none",
            }}
          >
            Back
          </button>
          <button
            type="submit"
            style={{
              backgroundColor: "#fff",
              border: "none",
              padding: "8px 20px",
              borderRadius: "6px",
              color: "#023337",
              fontFamily: "Faustina",
            }}
          >
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
    height: "100%",
    position: "relative",
    padding: "10px 30px",
    width: "100%",
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
    width: "100%",
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    color: "#fff",
    fontSize: "14px",
  },
};

export default VendorDetailsForm;
