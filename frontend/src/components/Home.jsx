import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MarketData from './MarketData';


const Home = () => {
  const [symbol, setSymbol] = useState('');
  const [searchSymbol, setSearchSymbol] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchSymbol(symbol.toUpperCase());
  };
  
  return (
    <div style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
        <div>
            <h1>Dashboard</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                    placeholder="Enter Stock Symbol"
                />
                <button type="submit">Search</button>
            </form>
            <MarketData symbol={searchSymbol} /> {/* Pass the searched symbol */}
        </div>
        <Link to='/portfolio' className="btn btn-light my-5">Portfolio</Link>
        <Link to='/login' className="btn btn-light my-5">Logout</Link>
    </div>
  )
}

export default Home