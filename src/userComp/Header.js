import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div style={styles.mainContainer}>
      <Link to="/vendor">
        <button style={styles.vendorNavigateButton}>Become Vendor</button>
      </Link>
      <div style={styles.searchContainer}>
        <select style={styles.dropdownSearch}>
          <option>All</option>
          <option>Books</option>
          <option>Electronics</option>
          <option>Clothes</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          style={styles.inputSearch}
        />

        <button style={styles.searchBtn}>
          <img
            src="../assets/searchItem.png"
            alt="search-icon"
            style={{ width: 18, height: 18 }}
          />
        </button>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    backgroundColor: "#18181B",
    height: 90,
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    gap: 20,
    position: "relative",
  },

  vendorNavigateButton: {
    backgroundColor: "#F9E813",
    border: "none",
    borderRadius: 5,
    padding: "2px 20px",
    fontFamily: "Lato, sans-serif",
    height: 40,
    width: 144,
    fontSize: 14,
    fontWeight: 400,
    cursor: "pointer",
    position: "relative",
    left: 166,
    top: 10,
  },

  searchContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#d9d9d9",
    borderRadius: "8px",
    overflow: "hidden",
    width: "90%",
    maxWidth: "600px",
    height: 40,
    padding: "0 0 0 10px",
    position: "relative",
    left: 166,
    top: 10,
  },

  dropdownSearch: {
    backgroundColor: "#fffdd0",
    border: "none",
    padding: "0 30px 0 10px",
    borderRadius: "5px",
    outline: "none",
    fontSize: "14px",
    height: "32px",
    color: "#000",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  inputSearch: {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "10px",
    fontSize: "14px",
    backgroundColor: "transparent",
  },

  searchBtn: {
    backgroundColor: "#ffea00",
    border: "none",
    padding: "11px 12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Header;
