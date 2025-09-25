import React, { useState } from "react";

const VendorAddProduct = () => {
  const [thumbnails, setThumbnails] = useState([]);
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

  const handleThumbnailChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setThumbnails(filesArray);
  };

  const handleGalleryChange = (e, index) => {
    const filesArray = Array.from(e.target.files);
    setGalleryImages((prev) => {
      const newGallery = [...prev];
      newGallery[index] = filesArray[0];
      return newGallery;
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
      thumbnails,
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
        <p style={{ color: "#000", fontFamily: "Lato", fontSize: "1.2rem" }}>
          General Information
        </p>
        <div style={{ display: "flex", width: "100%", gap: "1.2rem" }}>
          <div
            style={{
              background: "#fff",
              width: "60%",
              padding: 5,
              borderRadius: 5,
            }}
          >
            <div style={{ marginBottom: 10 }}>
              <label>Product Title*</label>
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
              <label>Product Description”</label>
              <br />
              <textarea
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Enter product description (max 500 words)"
                rows={6}
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
                    style={{ marginRight: 8 }} // 👈 yaha gap set kiya
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <div style={{ width: "40%" }}>gfsg</div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label>
            Upload Thumbnails*
            <br />
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleThumbnailChange}
              style={{ display: "block" }}
            />
          </label>
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            {thumbnails.map((file, i) => (
              <img
                key={i}
                src={URL.createObjectURL(file)}
                alt={`thumb-${i}`}
                style={{ height: 100, objectFit: "cover" }}
              />
            ))}
          </div>
        </div>

        <h3>General Information</h3>

        <div style={{ marginBottom: 10 }}>
          <label>
            Product Description <small>(90 words recommended)</small>
            <br />
            <textarea
              maxLength={90}
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
              placeholder="Enter Product Description"
              style={{ width: "100%", height: 80 }}
            />
          </label>
        </div>

        {/* Gender */}

        {/* Product Gallery */}
        <h3>Product Gallery (JPEG, PNG & Video)</h3>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div key={index}>
              <input
                type="file"
                accept="image/png, image/jpeg, video/*"
                onChange={(e) => handleGalleryChange(e, index)}
              />
              {galleryImages[index] && (
                <div style={{ marginTop: 4 }}>
                  {galleryImages[index].type.startsWith("video") ? (
                    <video
                      src={URL.createObjectURL(galleryImages[index])}
                      controls
                      width="100"
                    />
                  ) : (
                    <img
                      src={URL.createObjectURL(galleryImages[index])}
                      alt={`gallery-${index}`}
                      style={{ height: 80, objectFit: "cover" }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SKU/HSN */}
        <div style={{ marginTop: 20 }}>
          <label>
            SKU/HSN
            <br />
            <input
              type="text"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              style={{ width: "100%" }}
            />
          </label>
        </div>

        {/* Price and Stock */}
        <h3>Product Gallery, Price & Stock</h3>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 150 }}>
            <label>
              Regular Price*
              <br />
              <input
                type="number"
                value={regularPrice}
                onChange={(e) => setRegularPrice(e.target.value)}
                required
                placeholder="RS.0.00"
                style={{ width: "100%" }}
                min={0}
              />
            </label>
          </div>
          <div style={{ flex: 1, minWidth: 150 }}>
            <label>
              Sale Price*
              <br />
              <input
                type="number"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
                required
                placeholder="RS.0.00"
                style={{ width: "100%" }}
                min={0}
              />
            </label>
          </div>
          <div style={{ flex: 1, minWidth: 150 }}>
            <label>
              Coins*
              <br />
              <input
                type="number"
                value={coins}
                onChange={(e) => setCoins(e.target.value)}
                required
                style={{ width: "100%" }}
                min={0}
              />
            </label>
          </div>
          <div style={{ flex: 1, minWidth: 150 }}>
            <label>
              Stock*
              <br />
              <input
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
                style={{ width: "100%" }}
                min={0}
              />
            </label>
          </div>
        </div>

        {/* Dimensions & Weight */}
        <h3>Product Dimensions & Actual Weight</h3>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 150 }}>
            <label>
              Length
              <br />
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="Length"
                style={{ width: "100%" }}
                min={0}
              />
            </label>
          </div>
          <div style={{ flex: 1, minWidth: 150 }}>
            <label>
              Height
              <br />
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Height"
                style={{ width: "100%" }}
                min={0}
              />
            </label>
          </div>
          <div style={{ flex: 1, minWidth: 150 }}>
            <label>
              Actual Weight
              <br />
              <input
                type="number"
                value={actualWeight}
                onChange={(e) => setActualWeight(e.target.value)}
                placeholder="Actual Weight"
                style={{ width: "100%" }}
                min={0}
              />
            </label>
          </div>
        </div>

        {/* Highlights */}
        <h3>Product Highlights</h3>
        {highlights.map((highlight, idx) => (
          <div key={idx} style={{ marginBottom: 10 }}>
            <label>
              {idx + 1}
              <input
                type="text"
                value={highlight}
                onChange={(e) => handleHighlightChange(idx, e.target.value)}
                maxLength={100}
                placeholder="Enter Text up to 100 words"
                style={{ width: "90%", marginLeft: 8 }}
              />
            </label>
          </div>
        ))}
        <button
          type="button"
          onClick={addHighlight}
          style={{ marginBottom: 20 }}
        >
          + Add More Highlights
        </button>

        {/* Right Sidebar Inputs */}
        <div
          style={{ border: "1px solid #ccc", padding: 15, marginBottom: 20 }}
        >
          {/* YouTube Video */}
          <label style={{ display: "block", marginBottom: 10 }}>
            Product YouTube Video
            <input
              type="url"
              placeholder="https://youtube.com/..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              style={{ width: "100%", marginTop: 6 }}
            />
          </label>

          {/* Category */}
          <label style={{ display: "block", marginBottom: 10 }}>
            Category
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ width: "100%", marginTop: 6 }}
            >
              <option>All</option>
              <option>Category 1</option>
              <option>Category 2</option>
              {/* Add real categories here */}
            </select>
          </label>

          {/* Sub-Category */}
          <label style={{ display: "block", marginBottom: 10 }}>
            Select Sub - Category
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              style={{ width: "100%", marginTop: 6 }}
            >
              <option>All</option>
              <option>Sub 1</option>
              <option>Sub 2</option>
              {/* Add real subcategories here */}
            </select>
          </label>

          {/* Tag */}
          <label style={{ display: "block", marginBottom: 10 }}>
            Tag
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              style={{ width: "100%", marginTop: 6 }}
            />
          </label>

          {/* Manufacturing Country */}
          <label style={{ display: "block", marginBottom: 10 }}>
            Product Manufacturing Country
            <input
              type="text"
              placeholder="Enter Country Name"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{ width: "100%", marginTop: 6 }}
            />
          </label>

          {/* Brand */}
          <label style={{ display: "block", marginBottom: 10 }}>
            Brand
            <input
              type="text"
              placeholder="Enter Brand Name"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              style={{ width: "100%", marginTop: 6 }}
            />
          </label>

          {/* GST & Delivery */}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <label style={{ flex: 1 }}>
              GST %
              <input
                type="number"
                value={gst}
                onChange={(e) => setGst(e.target.value)}
                placeholder="%"
                min={0}
                max={100}
                style={{ width: "100%", marginTop: 6 }}
              />
            </label>

            <label style={{ flex: 2 }}>
              Delivery
              <select
                value={deliveryType}
                onChange={(e) => setDeliveryType(e.target.value)}
                style={{ width: "100%", marginTop: 6 }}
              >
                <option>Free</option>
                <option>Paid</option>
              </select>
            </label>

            {deliveryType === "Paid" && (
              <input
                type="number"
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                placeholder="Delivery Charge"
                min={0}
                style={{ flex: 1, marginTop: 24 }}
              />
            )}
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button">Save as Draft</button>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E8EFFF",
    padding: "20px 10px 10px 30px",
  },
};

export default VendorAddProduct;
