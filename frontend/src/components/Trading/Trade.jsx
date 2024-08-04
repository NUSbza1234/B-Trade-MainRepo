import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';

const Trade = ({ symbol, currentPrice }) => {
    const { user } = useUser();
    const [formData, setFormData] = useState({
        symbol: symbol,
        quantity: 1,
        orderType: 'Market',
        action: 'Buy',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const price = currentPrice;
            const response = await axios.post('https://betatradebackend.onrender.com/trade', { 
                ...formData, 
                userId: user.id,
                price
            });
            alert(`Trade successful: ${response.data._id}`);
        } catch (error) {
            alert(`Trade failed: ${error.response?.data?.error || error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ padding: '20px', background: '#f8f9fa', borderRadius: '10px', width: '300px' }}>
            <h4>Trade {symbol}</h4>
            <div className="mb-3">
                <label className="form-label">Action</label>
                <select
                    name="action"
                    value={formData.action}
                    onChange={handleChange}
                    className="form-select"
                    required
                >
                    <option value="Buy">Buy</option>
                    <option value="Sell">Sell</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Order Type</label>
                <select
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleChange}
                    className="form-select"
                    required
                >
                    <option value="Market">Market</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="form-control"
                    min="1"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit Order</button>
        </form>
    );
};

export default Trade;
