// Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [location, setLocation] = useState('');
  const [sqft, setSqft] = useState('');
  const [bath, setBath] = useState('');
  const [bhk, setBhk] = useState('');
  const [predictedPrice, setPredictedPrice] = useState(null);

  const handlePredictPrice = () => {
    // Make request to DRF API to predict price
    axios.post('http://127.0.0.1:8000/chat/predict/', {
      location: location,
      sqft: sqft,
      bath: bath,
      bhk:bhk
    })
    .then(response => {
      setPredictedPrice(response.data.predicted_price);
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
        <input type="text" placeholder="Square feet" value={sqft} onChange={e => setSqft(e.target.value)} />
        <input type="text" placeholder="Number of Bathrooms" value={bath} onChange={e => setBath(e.target.value)} />
        <input type="text" placeholder="Number of Bhk" value={bhk} onChange={e => setBhk(e.target.value)} />
        <button onClick={handlePredictPrice}>Predict Price</button>
      </div>
      {predictedPrice && <div>Predicted Price: {predictedPrice}</div>}
    </div>
  );
}

export default Chatbot;
