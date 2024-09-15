import React from 'react'
import Reviews from '../../Review/Review';

const ReviewSections = () => {
    return (
      <div className="review-section">
        <h2>Customer Reviews</h2>
        {Reviews.map((review, index) => (
          <div key={index} className="review">
            <h3 className="reviewer-name">{review.name}</h3>
            <div className="review-rating">
              {Array(review.rating)
                .fill('⭐')
                .map((star, i) => (
                  <span key={i} className="star">{star}</span>
                ))}
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    );
  };

export default ReviewSections
