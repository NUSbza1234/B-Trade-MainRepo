import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

function MarketData({ symbol }) {
    const [data, setData] = useState([]);
    const [marketOpen, setMarketOpen] = useState(false);
    const [currentPrice, setCurrentPrice] = useState(null);
    const socketRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (symbol) {
            console.log(`Fetching historical data for: ${symbol}`);
            axios.get(`https://backend-iota-snowy.vercel.app/historical/${symbol}`)
                .then(response => {
                    console.log('Fetched data:', response.data);
                    const barsData = response.data.bars[symbol] || [];
                    setData(barsData);
                    if (barsData.length > 0) {
                        const closingPrice = barsData[barsData.length - 1].c;
                        setCurrentPrice(closingPrice); 
                        console.log(`Closing price for ${symbol}: ${closingPrice}`);
                    }
                })
                .catch(error => console.error('Error fetching historical data:', error));

            checkMarketStatus();

            axios.post('https://betatradebackend.onrender.com/subscribe', { symbol })
                .then(response => {
                    console.log(response.data.message);
                })
                .catch(error => console.error('Error subscribing to symbol:', error));
        }
    }, [symbol]);

    useEffect(() => {
        if (data.length > 0) {
            renderChart(data);
        }
    }, [data]);

    const checkMarketStatus = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3001/market-status');
            const { is_open } = response.data;
            setMarketOpen(is_open);
        } catch (error) {
            console.error('Error checking market status:', error);
        }
    };

    const renderChart = (chartData) => {
        if (!chartData.length) {
            console.log('No data to render chart');
            return;
        }

        const ctx = document.getElementById('myChart').getContext('2d');

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(bar => new Date(bar.t).toLocaleDateString()),
                datasets: [{
                    label: 'Stock Price',
                    data: data.map(bar => bar.c),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false,
                }],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
            }
        });
    };

    useEffect(() => {
        if (!marketOpen) {
            console.log('Market is closed, skipping WebSocket connection');
            return;
        }

        const socket = new WebSocket('ws://127.0.0.1:3001');
        socketRef.current = socket;

        socket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        socket.onmessage = (event) => {
            const newBar = JSON.parse(event.data);
            console.log('New bar from WebSocket:', newBar);
            setCurrentPrice(newBar.c); 
            console.log(`Updated current price for ${symbol}: ${newBar.c}`);
            setData(prevData => {
                const updatedData = [...prevData, newBar];
                renderChart(updatedData);
                return updatedData;
            });

        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => socket.close();
    }, [data, marketOpen]);



    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <div style={{ width: '800px', height: '400px', position: 'relative' }}>
                    <canvas id="myChart" style={{ width: '100%', height: '100%' }}></canvas>
                </div>
                <div style={{ marginLeft: '20px' }}>
                    
                    <h4>{currentPrice ? `${currentPrice} USD` : 'Loading...'}</h4>
                </div>
            </div>
            {!marketOpen && <p>The market is currently closed.</p>}
        </div>
    );
}

export default MarketData;
