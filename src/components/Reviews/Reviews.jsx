import React from 'react'
import "./Reviews.css"

const Reviews= [
    {
      name: 'John Doe',
      rating: 5,
      comment: 'Excellent service and support. Highly recommend!',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      comment: 'Very good experience, but there is room for improvement.',
    },
    {
      name: 'Alice Johnson',
      rating: 3,
      comment: 'Average service. Nothing extraordinary.',
    },
    {
        name: 'John',
        rating: 5,
        comment: 'All news Are provide here good site.',
      },
      {
        name: 'Adam',
        rating: 5,
        comment: 'excellence news site.',
      },
      {
        name: 'Alison',
        rating: 2,
        comment: 'Good But can make it better',
      },
  ];
 
  
  const ReviewSection = () => {
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
  
  export default ReviewSection;
  
