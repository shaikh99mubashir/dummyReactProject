import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Retrieve user's name from local storage
    const signupData = JSON.parse(localStorage.getItem("signupData"));
    if (signupData) {
      setName(signupData.name);
    }
  }, []);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    // Limit decimal places to two digits
    const price = e.target.value;
    const regex = /^[0-9]+(\.[0-9]{0,2})?$/;
    if (regex.test(price)) {
      setProductPrice(price);
    }
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    // Create a new product object
    const newProduct = {
      productName,
      productPrice,
      width,
      height,
    };

    let flag = Object.values(newProduct);
    let flag2 = flag.some((e, i) => e == '');
    if (flag2) {
      alert('Required fields are missing')
      return;
    }

    // Update the products array
    setProducts([...products, newProduct]);

    // Clear the form fields
    setProductName("");
    setProductPrice("");
    setWidth("");
    setHeight("");
  };

  return (
    <div className="home-container">
      <h2 className="home-header">Hi, {name}</h2>
      <form className="product-form" onSubmit={handleAddProduct}>
        <h3 className="form-header">Add Product</h3>
        <input
          type="text"
          className="form-input"
          placeholder="Product Name"
          value={productName}
          onChange={handleProductNameChange}
          required
        />
        <input
          type="number"
          step="0.01"
          className="form-input"
          placeholder="Product Price"
          value={productPrice}
          onChange={handleProductPriceChange}
          required
        />
        <input
          type="number"
          className="form-input"
          placeholder="Width"
          value={width}
          onChange={handleWidthChange}
          required
        />
        <input
          type="number"
          className="form-input"
          placeholder="Height"
          value={height}
          onChange={handleHeightChange}
          required
        />
        <button type="submit" className="add-button">
          Add Product
        </button>
      </form>
      <table className="product-table">
        <thead>
          <tr>
            <th>SNo.</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Width</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>

              <td>{index +1}</td>
              <td>{product.productName}</td>
              <td>{product.productPrice}</td>
              <td>{product.width}</td>
              <td>{product.height}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
