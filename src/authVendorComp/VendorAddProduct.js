import React, { useState, useRef } from "react";
import { BiCoinStack } from "react-icons/bi";
const VendorAddProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [gender, setGender] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [sku, setSku] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [coins, setCoins] = useState("");
  const [stock, setStock] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [actualWeight, setActualWeight] = useState("");
  const [highlights, setHighlights] = useState([""]);
  const [category, setCategory] = useState("All");
  const [subCategory, setSubCategory] = useState("All");
  const [tag, setTag] = useState("");
  const [country, setCountry] = useState("");
  const [brand, setBrand] = useState("");
  const [gst, setGst] = useState("");
  const [delivery, setDelivery] = useState("");
  const [deliveryType, setDeliveryType] = useState("Free");

  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    // Hidden file input trigger
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Preview
    }
  };
  const fileInputRefs = useRef(
    Array.from({ length: 7 }, () => React.createRef())
  );

  const handleGalleryChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    setGalleryImages((prev) => {
      const updated = [...prev];
      updated[index] = file;
      return updated;
    });
  };

  const handleHighlightChange = (index, value) => {
    setHighlights((prev) => {
      const newHighlights = [...prev];
      newHighlights[index] = value;
      return newHighlights;
    });
  };

  const addHighlight = () => {
    setHighlights((prev) => [...prev, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      productTitle,
      productDescription,
      gender,
      galleryImages,
      videoUrl,
      sku,
      regularPrice,
      salePrice,
      coins,
      stock,
      length,
      height,
      actualWeight,
      highlights,
      category,
      subCategory,
      tag,
      country,
      brand,
      gst,
      delivery,
      deliveryType,
    });
  };

  return (
    <div className="add-product-form" style={styles.mainContainer}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <img
            src="../assets/addProMainIcon.png"
            alt="addProductThumImage"
            style={{ width: "3rem" }}
          />
          <h2 style={{ fontSize: "3rem", fontFamily: "Faustina" }}>
            Add Product
          </h2>
        </div>
        <div
          className="buttonContainer"
          style={{ display: "flex", gap: 10, fontFamily: "Lato" }}
        >
          <button
            style={{
              background: "transparent",
              padding: "5px 15px",
              border: "1px solid #023337",
              borderRadius: 10,
            }}
          >
            Save as Draft
          </button>
          <button
            style={{
              background: "#023337",
              padding: "5px 25px",
              border: "1px solid #023337",
              borderRadius: 10,
              color: "#fff",
            }}
          >
            Add Product
          </button>
        </div>
      </div>
      <div className="generalInfoContainer"></div>

      <form onSubmit={handleSubmit}>
        <p
          style={{
            color: "#000",
            fontFamily: "Lato",
            fontSize: "1.2rem",
            fontWeight: 400,
          }}
        >
          General Information
        </p>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "1.2rem",
            height: "400px",
          }}
        >
          <div
            style={{
              background: "#fff",
              width: "60%",
              padding: 5,
              borderRadius: 5,
              border: "1px solid #aca6a6ff",
            }}
          >
            <div style={{ marginBottom: 10 }}>
              <label
                style={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontSize: "1rem",
                }}
              >
                Product Title*
              </label>
              <br />
              <input
                type="text"
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)}
                required
                placeholder="Enter Product title ( 90 words recommended )"
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  border: "1px solid #000000",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontSize: "1rem",
                }}
              >
                Product Description”
              </label>
              <br />
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Enter product description (max 500 words)"
                rows={10}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "1px solid #000",
                  borderRadius: "5px",
                  resize: "vertical",
                  fontFamily: "Lato",
                  resize: "none",
                }}
              />
            </div>

            <div
              style={{
                marginBottom: 20,
                display: "flex",
                alignItem: "center",
              }}
            >
              <label
                style={{
                  marginRight: 10,
                  fontSize: "1rem",
                  fontFamily: "Lato",
                }}
              >
                Gender:
              </label>
              {["Man", "Woman", "Unisex", "Kids"].map((option) => (
                <label
                  key={option}
                  style={{
                    marginRight: 20,
                    fontFamily: "Lato",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="radio"
                    value={option}
                    checked={gender === option}
                    onChange={() => setGender(option)}
                    required
                    style={{ marginRight: 8 }}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div
            style={{
              width: "40%",
              height: "400px",
              background: "#fff",
              borderRadius: "5px",
              border: "1px solid #aca6a6ff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "30px",
            }}
          >
            <div
              style={{
                width: "90%",
                height: "300px",
                border: "1px solid #000",
                background: "#fff",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="../assets/uploadThumbImg.png"
                alt="Click to upload"
                onClick={handleImageClick}
                style={{
                  width: "3.2rem",
                  height: "3.2rem",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "8px",
                }}
              />

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
            <p>Upload Thumbnail</p>
          </div>
        </div>

        <p
          style={{
            color: "#000",
            fontFamily: "Lato",
            fontSize: "1.2rem",
            fontWeight: 400,
            marginTop: "0.5rem",
          }}
        >
          Product Gallery, Price & Stock
        </p>

        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "1.2rem",
            height: "300px",
          }}
        >
          <div
            style={{
              background: "#fff",
              width: "60%",
              padding: 5,
              borderRadius: 5,
              border: "1px solid #aca6a6ff",
            }}
          >
            <div style={{ marginBottom: 10 }}>
              <label
                style={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontSize: "1rem",
                }}
              >
                Product Gallery* ( JPEG, PNG & Video )
              </label>
              <br />
              <div style={{}}>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {Array.from({ length: 7 }).map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: "13%",
                        height: "5.5rem",
                        border: "1px solid #000",
                        background: "#fff",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        fileInputRefs.current[index].current.click()
                      }
                    >
                      {galleryImages[index] ? (
                        galleryImages[index].type.startsWith("video") ? (
                          <video
                            src={URL.createObjectURL(galleryImages[index])}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            muted
                          />
                        ) : (
                          <img
                            src={URL.createObjectURL(galleryImages[index])}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            alt="gallery-preview"
                          />
                        )
                      ) : (
                        <img
                          src="../assets/uploadThumbImg.png"
                          alt="Click to upload"
                          style={{ width: "2rem", height: "2rem" }}
                        />
                      )}

                      <input
                        type="file"
                        accept="image/png, image/jpeg, video/mp4"
                        ref={fileInputRefs.current[index]}
                        onChange={(e) => handleGalleryChange(e, index)}
                        style={{ display: "none" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <label
                style={{
                  fontFamily: "Lato",
                  fontWeight: 400,
                  fontSize: "1rem",
                }}
              >
                SKU/HSN
              </label>
              <br />
              <input
                type="text"
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)}
                required
                placeholder=""
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  border: "1px solid #000000",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  width: "100%",
                  marginTop: "1rem",
                  flexWrap: "wrap",
                  fontFamily: "Lato",
                }}
              >
                {/* Regular Price */}
                <div style={{ flex: 1, width: "25%" }}>
                  <label style={{ fontWeight: 500 }}>Regular Price*</label>
                  <div
                    style={{
                      border: "1px solid #000",
                      borderRadius: "0.3rem",
                      display: "flex",
                      alignItems: "center",
                      paddingRight: "8px",
                      fontFamily: "Lato",
                    }}
                  >
                    <input
                      type="text"
                      value={regularPrice}
                      onChange={(e) => setRegularPrice(e.target.value)}
                      placeholder="Enter Price"
                      style={{
                        width: "100%",
                        padding: "8px",
                        border: "none",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 400,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "1.3rem",
                        lineHeight: "1.5rem",
                      }}
                    >
                      <span>|</span>
                      <span>₹</span>
                    </p>
                  </div>
                </div>

                {/* Sales Price */}
                <div style={{ flex: 1, width: "25%" }}>
                  <label style={{ fontWeight: 500 }}>Sales Price</label>
                  <div
                    style={{
                      border: "1px solid #000",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      paddingRight: "8px",
                      fontFamily: "Lato",
                    }}
                  >
                    <input
                      type="text"
                      value={salePrice}
                      onChange={(e) => setSalePrice(e.target.value)}
                      placeholder="Enter Price"
                      style={{
                        width: "100%",
                        padding: "8px",
                        border: "none",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 400,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "1.3rem",
                        lineHeight: "1.5rem",
                      }}
                    >
                      <span>|</span>
                      <span>₹</span>
                    </p>
                  </div>
                </div>

                {/* Coins */}
                <div style={{ flex: 1, width: "25%" }}>
                  <label style={{ fontWeight: 500 }}>Coins</label>
                  <div
                    style={{
                      border: "1px solid #000",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      paddingRight: "8px",
                      fontFamily: "Lato",
                    }}
                  >
                    <input
                      type="text"
                      value={coins}
                      onChange={(e) => setCoins(e.target.value)}
                      placeholder="Enter Coins"
                      style={{
                        width: "100%",
                        padding: "8px",
                        border: "none",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 400,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontSize: "1.3rem",
                        lineHeight: "1.5rem",
                      }}
                    >
                      <span>|</span>
                      <BiCoinStack />
                    </p>
                  </div>
                </div>

                {/* Stock */}
                <div style={{ flex: 1, width: "25%" }}>
                  <label style={{ fontWeight: 500 }}>Stock</label>
                  <input
                    type="text"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    placeholder="Enter Stock"
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #000",
                      borderRadius: "5px",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "40%",
              height: "550px",
              background: "#fff",
              borderRadius: "5px",
              border: "1px solid #aca6a6ff",
              display: "flex",
              flexDirection: "column",
              fontFamily: "Lato",
              padding: "10px",
            }}
          >
            <div>
              <label>Product YouTube Video</label>
              <input
                type="text"
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #000",
                  borderRadius: "15px",
                  boxSizing: "border-box",
                }}
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="youtube.com/c/yuytuubub#..."
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label
                style={{
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "4px",
                  fontSize: "1rem",
                }}
              >
                Category*
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 10px 10px 10px",
                  border: "1px solid #000",
                  borderRadius: "15px",
                  outline: "none",
                  fontSize: "1rem",
                  backgroundColor: "#023337",
                  color: "#fff",
                  boxSizing: "border-box",
                }}
              >
                <option value="all">All</option>
                <option value="clothing">Clothing</option>
                <option value="shoes">Shoes</option>
                <option value="accessories">Accessories</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <label
                style={{
                  fontWeight: 500,
                  display: "block",
                  marginBottom: "4px",
                  fontSize: "1rem",
                }}
              >
                Sub-Category*
              </label>
              <select
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #000",
                  borderRadius: "15px",
                  outline: "none",
                  fontSize: "1rem",
                  backgroundColor: "#fff",
                  color: "#000",
                  boxSizing: "border-box",
                }}
              >
                <option value="all">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
                <option value="new-arrivals">New Arrivals</option>
              </select>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <label
                style={{
                  fontWeight: 500,
                  display: "block",
                  marginBottom: "4px",
                  fontSize: "1rem",
                }}
              >
                Tag
              </label>
              <div>
                <textarea
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    border: "1px solid #000",
                    minHeight: "3rem",
                    padding: "8px",
                    resize: "none",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                  placeholder="Enter tags here..."
                />
              </div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <label
                style={{
                  fontWeight: 500,
                  display: "block",
                  marginBottom: "4px",
                  fontSize: "1rem",
                }}
              >
                Product Manufacturing Country
              </label>
              <div>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #000",
                    borderRadius: "15px",
                    boxSizing: "border-box",
                  }}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Enter Country Name"
                />
              </div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <label
                style={{
                  fontWeight: 500,
                  display: "block",
                  marginBottom: "4px",
                  fontSize: "1rem",
                }}
              >
                Brand
              </label>
              <div>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #000",
                    borderRadius: "15px",
                    boxSizing: "border-box",
                  }}
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Enter Brand Name"
                />
              </div>
            </div>
          </div>
        </div>
        <label
          style={{
            fontFamily: "Lato",
            fontWeight: 400,
            fontSize: "1rem",
          }}
        >
          Product Dimensions & Actual Weight
        </label>
        <div
          style={{
            width: "59%",
            gap: "1.2rem",
            marginTop: "0.5rem",
          }}
        >
          <div
            style={{
              background: "#fff",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #aca6a6ff",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              {/* Length */}
              <div style={{ width: "33%" }}>
                <label
                  style={{
                    fontWeight: 500,
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Length
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #000",
                    borderRadius: "8px",
                    overflow: "hidden",
                    height: "40px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter length"
                    style={{
                      flex: 1,
                      width: "65%",
                      border: "none",
                      outline: "none",
                      fontSize: "1rem",
                    }}
                  />
                  {/* Divider */}
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 400,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "1.3rem",
                      lineHeight: "1.5rem",
                    }}
                  >
                    <span>|</span>
                  </p>
                  <select
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      fontSize: "1rem",
                      width: "35%",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    <option value="cm">cm</option>
                    <option value="m">meter</option>
                    <option value="inch">inch</option>
                    <option value="ft">feet</option>
                  </select>
                </div>
              </div>

              {/* Width */}
              <div style={{ width: "33%" }}>
                <label
                  style={{
                    fontWeight: 500,
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Width
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #000",
                    borderRadius: "8px",
                    overflow: "hidden",
                    height: "40px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter width"
                    style={{
                      flex: 1,
                      border: "none",
                      outline: "none",
                      fontSize: "1rem",
                      width: "65%",
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 400,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "1.3rem",
                      lineHeight: "1.5rem",
                    }}
                  >
                    <span>|</span>
                  </p>
                  <select
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      fontSize: "1rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      width: "35%",
                    }}
                  >
                    <option value="cm">cm</option>
                    <option value="m">meter</option>
                    <option value="inch">inch</option>
                    <option value="ft">feet</option>
                  </select>
                </div>
              </div>

              {/* Height */}
              <div style={{ width: "33%" }}>
                <label
                  style={{
                    fontWeight: 500,
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Height
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #000",
                    borderRadius: "8px",
                    overflow: "hidden",
                    height: "40px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter height"
                    style={{
                      flex: 1,
                      border: "none",
                      outline: "none",
                      fontSize: "1rem",
                      width: "65%",
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 400,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "1.3rem",
                      lineHeight: "1.5rem",
                    }}
                  >
                    <span>|</span>
                  </p>
                  <select
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      fontSize: "1rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      width: "35%",
                    }}
                  >
                    <option value="cm">cm</option>
                    <option value="m">meter</option>
                    <option value="inch">inch</option>
                    <option value="ft">feet</option>
                  </select>
                </div>
              </div>
            </div>

            <label
              style={{
                fontWeight: 500,
                display: "block",
                marginBottom: "6px",
              }}
            >
              Actual Weight
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #000",
                borderRadius: "8px",
                height: "40px",
              }}
            >
              <input
                type="text"
                placeholder="Enter weight"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "1rem",
                  width: "90%",
                }}
              />
              <p
                style={{
                  margin: 0,
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "1.3rem",
                  lineHeight: "1.5rem",
                }}
              >
                <span>|</span>
              </p>
              <select
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: "1rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  width: "10%",
                }}
              >
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="lb">lb</option>
                <option value="oz">oz</option>
              </select>
            </div>
          </div>
        </div>
        <label
          style={{
            fontFamily: "Lato",
            fontWeight: 400,
            fontSize: "1rem",
          }}
        >
          Product Highlights
        </label>

        <div
          style={{
            width: "59%",
            gap: "1.2rem",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              background: "#fff",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #aca6a6ff",
            }}
          >
            <div
              style={{
                border: "1px solid #000",
                borderRadius: "0.3rem",
                display: "flex",
                alignItems: "center",
                paddingRight: "8px",
                fontFamily: "Lato",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "1.3rem",

                  lineHeight: "1.5rem",
                  paddingLeft: "1rem",
                }}
              >
                <span>1</span>
                <span>|</span>
              </p>
              <input
                type="text"
                value={highlights}
                onChange={(e) => setHighlights(e.target.value)}
                placeholder="Enter Text upto 100 words"
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <p
              style={{
                textAlign: "end",
                cursor: "pointer",
                fontSize: "1rem",
                margin: "10px 0px 0px 0px",
              }}
            >
              + Add More Highlights
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end", // right side
              marginTop: "10px",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
            top: "-4rem",
          }}
        >
          <div
            style={{
              background: "#fff",
              width: "39%", // container width
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #aca6a6ff",
            }}
          >
            <label
              style={{
                fontWeight: 500,
                display: "block",
                marginBottom: "4px",
                fontSize: "1rem",
              }}
            >
              Tax & Delivery
            </label>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                width: "100%",
              }}
            >
              <label
                style={{
                  fontWeight: 500,
                  display: "block",
                  marginBottom: "4px",
                  fontSize: "1rem",
                  whiteSpace: "nowrap",
                }}
              >
                GST
              </label>

              <div
                style={{
                  flex: 1,
                  border: "1px solid #000",
                  borderRadius: "0.3rem",
                  display: "flex",
                  alignItems: "center",
                  paddingRight: "8px",
                  fontFamily: "Lato",
                  justifyContent: "center",
                }}
              >
                <input
                  type="text"
                  value={highlights}
                  onChange={(e) => setHighlights(e.target.value)}
                  placeholder="Enter Text upto 100 words"
                  style={{
                    flex: 1,
                    padding: "8px",
                    border: "none",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontWeight: 400,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "1.3rem",
                    lineHeight: "1.5rem",
                    paddingLeft: "1rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>|</span>
                  <span>%</span>
                </p>
              </div>
            </div>
            <label
              style={{
                fontWeight: 500,
                display: "block",
                marginBottom: "4px",
                fontSize: "1rem",
              }}
            >
              Delivery
            </label>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                <input
                  type="radio"
                  value="free"
                  checked={deliveryType === "free"}
                  onChange={(e) => setDeliveryType(e.target.value)}
                />
                <label
                  style={{
                    fontWeight: 500,
                    display: "block",
                    marginBottom: "4px",
                    fontSize: "1rem",
                  }}
                >
                  Free Delivery
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  marginLeft: "20px",
                }}
              >
                <label
                  style={{
                    fontWeight: 500,
                    display: "block",
                    marginBottom: "4px",
                    fontSize: "1rem",
                  }}
                >
                  Paid
                </label>
                <div
                  style={{
                    border: "1px solid #000",
                    borderRadius: "0.3rem",
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "8px",
                    fontFamily: "Lato",
                    width: "100%",
                    justifyContent: "end",
                  }}
                >
                  <input
                    type="text"
                    value={regularPrice}
                    onChange={(e) => setRegularPrice(e.target.value)}
                    placeholder="Enter Price"
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "none",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 400,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "1.3rem",
                      lineHeight: "1.5rem",
                    }}
                  >
                    <span>|</span>
                    <span>₹</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const styles = {
  mainContainer: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#E8EFFF",
    padding: "20px 10px 10px 30px",
  },
};

export default VendorAddProduct;
