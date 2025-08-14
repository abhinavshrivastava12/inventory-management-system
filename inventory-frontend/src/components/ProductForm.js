import React, { useState } from 'react';
import api from '../api';

const ProductForm = ({ onProductAdded }) => {
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    price: '',
    expiryDate: '',
    category: 'Other'
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await api.post('/products', form);
    onProductAdded(); // refresh product list
    setForm({ name: '', quantity: '', price: '', expiryDate: '', category: 'Other' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Product name" required />
      <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" required />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
      <input type="date" name="expiryDate" value={form.expiryDate} onChange={handleChange} />
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="Electronics">Electronics</option>
        <option value="Grocery">Grocery</option>
        <option value="Clothing">Clothing</option>
        <option value="Accessories">Accessories</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
