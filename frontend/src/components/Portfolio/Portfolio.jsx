import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Portfolio() {
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        axios.get('/portfolio/user1') // Assuming static user for now
            .then(response => setPortfolio(response.data))
            .catch(error => console.error('Error fetching portfolio:', error));
    }, []);

    return (
        <div>
            <h2>Portfolio</h2>
            {portfolio ? (
                <ul>
                    {portfolio.positions.map((position, index) => (
                        <li key={index}>
                            {position.symbol}: {position.quantity} shares @ ${position.averagePrice.toFixed(2)}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Portfolio;


