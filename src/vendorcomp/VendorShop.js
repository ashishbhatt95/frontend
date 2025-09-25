import React, { useState } from "react";

const VedorShop = () => {
  const [shopName, setShopName] = useState("");
  const [userName, setUserName] = useState("");
  const [shopLogo, setShopLogo] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [shopRegistration, setShopRegistration] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [shopAdressF, setShopAdressF] = useState("");
  const [shopAdressS, setShopAdressS] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [gstNum, setGstNum] = useState("");
  const [website, setWebsite] = useState("");
  const [shopBio, setShopBio] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      shopName,
      userName,
      shopLogo,
      coverImage,
      shopRegistration,
      businessType,
      shopAdressF,
      shopAdressS,
      state,
      city,
      pincode,
      gstNum,
      website,
      shopBio,
      description,
    };

    console.log("Form Submitted ✅", formData);
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
        Shop Details
      </h2>

      <form style={styles.formWrapper} onSubmit={handleSubmit}>
        {/* Shop Name & Username */}
        <div style={styles.row}>
          <div style={{ width: "60%" }}>
            <label style={styles.label}>Shop Name</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                placeholder="Enter Shop Name"
              />
            </div>
          </div>

          <div style={{ width: "40%" }}>
            <label style={styles.label}>Username</label>
            <div style={styles.inputBox}>
              <input
                type="text"
                style={styles.input}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter Username"
              />
            </div>
          </div>
        </div>

        {/* Shop Logo & Cover Image */}
        <div style={styles.row}>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Shop Logo</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="file"
                onChange={(e) => setShopLogo(e.target.files[0])}
              />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Shop Cover Image</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="file"
                onChange={(e) => setCoverImage(e.target.files[0])}
              />
            </div>
          </div>
        </div>

        {/* Registration & Business Type */}
        <div style={styles.row}>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>
              Shop Registration Number (if Registered)
            </label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={shopRegistration}
                onChange={(e) => setShopRegistration(e.target.value)}
                placeholder="Enter Registration Number"
              />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Business Type</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                placeholder="Enter Business Type"
              />
            </div>
          </div>
        </div>

        {/* Shop Address */}
        <h3 style={{ color: "#F9E813", marginTop: "20px", fontSize: "1rem" }}>
          Shop Address
        </h3>

        <div>
          <label style={styles.label}>Address Line 1 *</label>
          <div style={styles.inputBox}>
            <input
              style={styles.input}
              type="text"
              value={shopAdressF}
              onChange={(e) => setShopAdressF(e.target.value)}
              placeholder="Enter House Number, Road Number"
            />
          </div>
        </div>

        <div>
          <label style={styles.label}>Address Line 2</label>
          <div style={styles.inputBox}>
            <input
              style={styles.input}
              type="text"
              value={shopAdressS}
              onChange={(e) => setShopAdressS(e.target.value)}
              placeholder="Enter Apartment, Landmark"
            />
          </div>
        </div>

        {/* State, City, Pincode */}
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

        {/* Additional Info */}
        <h3 style={{ color: "#F9E813", marginTop: "20px", fontSize: "1rem" }}>
          Additional
        </h3>

        <div>
          <label style={styles.label}>GST Number</label>
          <div style={styles.inputBox}>
            <input
              style={styles.input}
              type="text"
              value={gstNum}
              onChange={(e) => setGstNum(e.target.value)}
              placeholder="Enter GST Number"
            />
          </div>
        </div>

        <div style={styles.row}>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Enter Website</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter Website"
              />
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <label style={styles.label}>Shop Bio</label>
            <div style={styles.inputBox}>
              <input
                style={styles.input}
                type="text"
                value={shopBio}
                onChange={(e) => setShopBio(e.target.value)}
                placeholder="Enter Bio"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label style={styles.label}>Shop Description</label>
          <div style={styles.inputBox}>
            <textarea
              style={{
                ...styles.input,
                minHeight: "80px",
                resize: "vertical",
              }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Shop Description"
            />
          </div>
        </div>

        {/* Buttons */}
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
    fontFamily: "Lato",
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

export default VedorShop;
