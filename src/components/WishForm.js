import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WishForm = ({ setUserInfo }) => {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const navigate = useNavigate();
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Relationship:", relationship);
    setUserInfo({ name, relationship });
    navigate('/message');
  };

  return (
    <div className="form-container">
       <img src="/images/flower1.png" className="flower top-left" alt="Flower Top-Left" />
      <img src="/images/flower2.png" className="flower top-right" alt="Flower Top-Right" />
      <img src="/images/flower3.png" className="flower bottom-left" alt="Flower Bottom-Left" />
      <img src="/images/flower4.png" className="flower bottom-right" alt="Flower Bottom-Right" />
      <form onSubmit={handleSubmit}>
        <label>
          Your Name In Short:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label1>
          Your Relationship:
          <select value={relationship} onChange={(e) => setRelationship(e.target.value)} required>
            <option value="">Select your r/ship with Meron</option>
            <option value="friend">Friend</option>
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
            <option value="parent">Parent</option>
            <option value="colleague">Colleague</option>
            {/* Add more options as needed */}
          </select>
        </label1>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WishForm;
