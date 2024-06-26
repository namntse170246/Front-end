import React, { useState, useEffect } from "react";
import "./featureProperties.css";
import { GetAllRealestates } from "../../components/API/APIConfigure";

function FeatureProperties() {
  const [featureProperties, setFeatureProperties] = useState([]);

  useEffect(() => {
    const fetchFeatureProperties = async () => {
      try {
        const response = await GetAllRealestates();
        console.log(response.data);
        setFeatureProperties(response.data);
      } catch (error) {
        console.error("Error fetching feature properties", error);
      }
    };

    fetchFeatureProperties();
  }, []);

  // Chỉ hiển thị 4 card đầu tiên nếu có nhiều hơn
  const displayedProperties = featureProperties.slice(0, 5);

  return (
    <div className="fp">
      {displayedProperties.map((property, index) => (
        <div className="fpItem" key={index}>
          <img src={property.image} alt="/" className="fpImg" />
          <span className="fpName">{property.courtName}</span>
          <span className="fpName">{property.phone}</span>
          <div className="fpRating">
            <button>9.9</button>
            <span>Good</span>
          </div>
          <span className="fpCity">{property.location}</span>
        </div>
      ))}
    </div>
  );
}

export default FeatureProperties;
