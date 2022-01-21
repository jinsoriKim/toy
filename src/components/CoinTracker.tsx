import React, {useEffect, useState} from 'react';

const CoinTracker = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((Response) => Response.json())
        .then((json) => {
            if(coins.length<10)
                setCoins(json);
            setLoading(false);
        })
    })
    return (
        <div>
            <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> : (
                <select>
                    {coins.map((coin, index) => <option key={index}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>)}
                </select>
            )}
            
        </div>
    );
};

export default CoinTracker;