import React, { useState } from "react";
import Dashboard from "../userComp/Dashboard";
import { Link } from "react-router-dom";

const AuthVendorSidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  return (
    <div style={styles.mainContainer}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <h2
          style={{
            fontFamily: "Lato",
            fontSize: "1.3rem",

            fontWeight: 400,
          }}
        >
          Our Microlife
        </h2>
        <div style={{ position: "relative", top: "-5px" }}>
          <img
            alt="close button"
            src="../assets/close.png"
            style={{ width: "1.5rem", color: "black" }}
          />
        </div>
      </div>
      <div className="mainMenuContainer">
        <p style={{ fontSize: "0.8rem", fontFamily: "Lato", color: "#6A717F" }}>
          Main menu
        </p>
        <div
          style={{
            paddingLeft: "10px",
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
          }}
        >
          <Link
            to="/authVendor"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: ".7rem",
                height: "1.5rem",
              }}
            >
              <img
                src="../assets/dashboard.png"
                alt="dashboard"
                style={{
                  width: "1rem",
                  backgroundColor: "#6A717F",
                  borderRadius: "30%",
                }}
              />
              <p
                style={{
                  fontFamily: "Lato",
                  fontSize: "1rem",
                  color: "#6A717F",
                  height: "1rem",
                  position: "relative",
                  top: ".2rem",
                }}
              >
                Dashboard
              </p>
            </div>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: ".7rem",
              height: "1.5rem",
            }}
          >
            <img
              src="../assets/Cart.png"
              alt="cartMenu"
              style={{ width: "1.2rem" }}
            />
            <p
              style={{
                fontFamily: "Lato",
                fontSize: "1rem",
                color: "#6A717F",
                height: "1rem",
                position: "relative",
                top: ".2rem",
              }}
            >
              Order Management
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: ".7rem",
              height: "1.5rem",
            }}
          >
            <img
              src="../assets/customers.png"
              alt="customers"
              style={{
                width: "1.2rem",
                borderRadius: "30%",
              }}
            />
            <p
              style={{
                fontFamily: "Lato",
                fontSize: "1rem",
                color: "#6A717F",
                height: "1rem",
                position: "relative",
                top: ".2rem",
              }}
            >
              Customers
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: ".7rem",
              height: "1.5rem",
            }}
          >
            <img
              src="../assets/coupon.png"
              alt="coupon"
              style={{
                width: "1.2rem",
                borderRadius: "30%",
              }}
            />
            <p
              style={{
                fontFamily: "Lato",
                fontSize: "1rem",
                color: "#6A717F",
                height: "1rem",
                position: "relative",
                top: ".2rem",
              }}
            >
              Coupon Code
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: ".7rem",
              height: "1.5rem",
            }}
          >
            <img
              src="../assets/vendorcategory.png"
              alt="vendorcategory"
              style={{
                width: "1.2rem",
                borderRadius: "30%",
              }}
            />
            <p
              style={{
                fontFamily: "Lato",
                fontSize: "1rem",
                color: "#6A717F",
                height: "1rem",
                position: "relative",
                top: ".2rem",
              }}
            >
              Categories
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: ".7rem",
              height: "1.5rem",
            }}
          >
            <img
              src="../assets/transaction.png"
              alt="Transaction"
              style={{
                width: "1.2rem",
                borderRadius: "30%",
              }}
            />
            <p
              style={{
                fontFamily: "Lato",
                fontSize: "1rem",
                color: "#6A717F",
                height: "1rem",
                position: "relative",
                top: ".2rem",
              }}
            >
              Transaction
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: ".7rem",
              height: "1.5rem",
            }}
          >
            <img
              src="../assets/brand.png"
              alt="vendorBrand"
              style={{
                width: "1.2rem",
                borderRadius: "30%",
                height: "1.5rem",
              }}
            />
            <p
              style={{
                fontFamily: "Lato",
                fontSize: "1rem",
                color: "#6A717F",
                height: "1rem",
                position: "relative",
                top: ".2rem",
              }}
            >
              Brand
            </p>
          </div>
        </div>
      </div>
      <div className="productContainer" style={{ marginTop: "1rem" }}>
        <p
          style={{
            fontSize: "0.8rem",
            fontFamily: "Lato",
            color: "#6A717F",
          }}
        >
          Product
        </p>
        <div
          style={{
            paddingLeft: "10px",
            display: "flex",
            flexDirection: "column",
            gap: ".8rem",
          }}
        >
          <Link
            to="vendorAddProduct"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: ".7rem",
                height: "1.5rem",
              }}
            >
              <img
                src="../assets/addIcon.png"
                alt="add Item"
                style={{
                  width: "1.2rem",
                  borderRadius: "30%",
                }}
              />
              <p
                style={{
                  fontFamily: "Lato",
                  fontSize: "1rem",
                  color: "#6A717F",
                  height: "1rem",
                  position: "relative",
                  top: ".2rem",
                }}
              >
                Add Products
              </p>
            </div>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: ".7rem",
              height: "1.5rem",
            }}
          >
            <img
              src="../assets/media.png"
              alt="media"
              style={{ width: "1.2rem", borderRadius: "30%" }}
            />
            <p
              style={{
                fontFamily: "Lato",
                fontSize: "1rem",
                color: "#6A717F",
                height: "1rem",
                position: "relative",
                top: ".2rem",
              }}
            >
              Product Media
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: ".7rem",
              height: "1.5rem",
            }}
          >
            <img
              src="../assets/productList.png"
              alt="productList"
              style={{
                width: "1.2rem",
                borderRadius: "30%",
              }}
            />
            <p
              style={{
                fontFamily: "Lato",
                fontSize: "1rem",
                color: "#6A717F",
                height: "1rem",
                position: "relative",
                top: ".2rem",
              }}
            >
              Product List
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: ".7rem",
              height: "1.5rem",
            }}
          >
            <img
              src="../assets/reviews.png"
              alt="coupon"
              style={{
                width: "1.2rem",
                borderRadius: "30%",
              }}
            />
            <p
              style={{
                fontFamily: "Lato",
                fontSize: "1rem",
                color: "#6A717F",
                height: "1rem",
                position: "relative",
                top: ".2rem",
              }}
            >
              Product Reviews
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: ".7rem",
              height: "1.5rem",
            }}
          >
            <img
              src="../assets/vendorcategory.png"
              alt="vendorcategory"
              style={{
                width: "1.2rem",
                borderRadius: "30%",
              }}
            />
            <p
              style={{
                fontFamily: "Lato",
                fontSize: "1rem",
                color: "#6A717F",
                height: "1rem",
                position: "relative",
                top: ".2rem",
              }}
            >
              Categories
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: ".7rem",
              height: "1.5rem",
            }}
          >
            <img
              src="../assets/transaction.png"
              alt="Transaction"
              style={{
                width: "1.2rem",
                borderRadius: "30%",
              }}
            />
            <p
              style={{
                fontFamily: "Lato",
                fontSize: "1rem",
                color: "#6A717F",
                height: "1rem",
                position: "relative",
                top: ".2rem",
              }}
            >
              Transaction
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: ".7rem",
              height: "1.5rem",
            }}
          >
            <img
              src="../assets/brand.png"
              alt="vendorBrand"
              style={{
                width: "1.2rem",
                borderRadius: "30%",
              }}
            />
            <p
              style={{
                fontFamily: "Lato",
                fontSize: "1rem",
                color: "#6A717F",
                height: "1rem",
                position: "relative",
                top: ".2rem",
              }}
            >
              Brand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    padding: "20px 10px 10px 20px",
    position: "relative",
    boxShadow: "5px 3px 8px -8px",
    height: "100%",
  },
};

export default AuthVendorSidebar;
