
import React, { useState } from 'react';

const CostEstimation = () => {        
    const [aname, setAname] = useState("");
    const [size, setSize] = useState(0);
    const [bh, setBh] = useState(0);
    const [bt, setBt] = useState(0);
    const [parking, setParking] = useState(0);
    const [duplex, setDuplex] = useState(0);
    const [balcony, setBalcony] = useState(0);
    const [prediction, setPrediction] = useState(0);
    
    const handleSubmit = async e => {
        e.preventDefault();
        
        const response = await fetch('http://127.0.0.1:8000/sproduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                aname,
                size,
                bh,
                bt,
                parking,
                duplex,
                balcony,
                prediction
            })
        });
        const data = await response.json();
        
        setPrediction(data.prediction);
    };
    
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                    <label>Location :</label>
                    <input type="text" value={aname} onChange={e => setAname(e.target.value)} />
                </div>
                <div>
                    <label>Square feet:</label>
                    <input type="number" value={size} onChange={e => setSize(e.target.value)} />
                </div>
                <div>
                    <label>BHK1:</label>
                    <input type="checkbox" value={bh} onChange={e => setBh(e.target.value)} />
                </div>
                <div>
                    <label>BHK2:</label>
                    <input type="checkbox" value={bh} onChange={e => setBh(e.target.value)} />
                </div>
                <div>
                    <label>BHK3:</label>
                    <input type="checkbox" value={bh} onChange={e => setBh(e.target.value)} />
                </div>
                <div>
                    <label>BHK4:</label>
                    <input type="checkbox" value={bh} onChange={e => setBh(e.target.value)} />
                </div>
                <div>
                    <label>Number of Bathrooms:</label>
                    <input type="number" value={bt} onChange={e => setBt(e.target.value)} />
                </div>
             
                <div>
                    <label>parking:(0 or 1)</label>
                    <input type="number" value={parking} onChange={e => setParking(e.target.value)} />
                </div>
                <div>
                    <label>duplex (0 or 1):</label>
                    <input type="number" value={duplex} onChange={e => setDuplex(e.target.value)} />
                </div>
                <div>
                    <label>Balcony (0 or 1):</label>
                    <input type="number" value={balcony} onChange={e => setBalcony(e.target.value)} />
                </div>
             
                <button type="submit">Predict</button>
            </form>
            <div>
                <p>Predicted Price: ${prediction}</p>
            </div>
        </div>
    );
};

    
    


export default CostEstimation