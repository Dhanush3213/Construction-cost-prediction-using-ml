
import React, { useState } from 'react';

    const [prediction, setPrediction] = useState(0);

    const handleSubmit = async e => {
        e.preventDefault();

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                location,
                sqft,
                bath,
                bhk
      
            })
        });
        const data = await response.json();

        setPrediction(data.prediction);
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Location :</label>
                    <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
                </div>
                <div>
                    <label>Square feet:</label>
                    <input type="number" value={sqft} onChange={e => setSqft(e.target.value)} />
                </div>
                <div>
                    <label>BHK:</label>
                    <input type="number" value={bhk} onChange={e => setBhk(e.target.value)} />
                </div>
<div>
                    <label>Number of Bathrooms:</label>

                <button type="submit">Predict</button>
            </form>
            <div>
                <p>Predicted Price: ${prediction}</p>
            </div>
        </>
    )
}








export default CostEstimation