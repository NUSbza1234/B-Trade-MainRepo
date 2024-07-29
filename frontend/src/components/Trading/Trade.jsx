import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';

const Trade = () => {
    const { user } = useUser();
    const [formData, setFormData] = useState({ userId: '', symbol: '', quantity: '', price: '', type: 'buy' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://betatradebackend.onrender.com/trade', { ...formData, userId: user.id });
            alert(`Trade successful: ${response.data._id}`);
        } catch (error) {
            alert(`Trade failed: ${error.response.data}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="symbol" value={formData.symbol} onChange={handleChange} placeholder="Symbol" required />
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required />
            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
            <select name="type" value={formData.type} onChange={handleChange}>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
            </select>
            <button type="submit">Trade</button>
        </form>
    );
};

export default Trade;
