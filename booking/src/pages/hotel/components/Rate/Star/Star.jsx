import "./star.css";
import { FaStar } from "react-icons/fa/index.esm";

import { useState } from "react";

const Star = ({ click }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onChange={(e) => {
                click(e.target.value);
              }}
            />
            <FaStar
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              className="star"
              size={30}
              onMouseOver={() => setHover(ratingValue)}
              onMouseOut={() => setHover(null)}
            />
          </label>
        );
      })}
      <p>Your Rate: {rating}</p>
    </div>
  );
};

export default Star;
