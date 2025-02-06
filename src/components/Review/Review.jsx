import { useState } from "react";

const Review = () => {
  
  const [reviews, setReviews] = useState([
    { id: 1, name: "Abdulla Al Mamun", rating: 5, comment: "Great products! Highly recommended. Affordable Price and priceless product value." },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Really good, but there's room for improvement." },
  ]);

  
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  
  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      setReviews([...reviews, { id: Date.now(), ...newReview }]);
      setNewReview({ name: "", rating: 5, comment: "" });
    }
  };

  return (
    <div className="px-4 py-10">
     <div className="bg-purple-500 text-white py-4">

      <h2 className="text-3xl font-bold text-center mb-6">Customer Reviews</h2>
      <p className="text-center mb-8">
        Read what our customers are saying about our products!
      </p>
     </div>

     <div className="max-w-4xl mx-auto px-4 py-10">
        
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-red-600">{review.name}</h3>
              <div className="flex">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>

    
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Leave a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border rounded-md"
            required
          />
          
          
          <select
            name="rating"
            value={newReview.rating}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="5">⭐ ⭐ ⭐ ⭐ ⭐</option>
            <option value="4">⭐ ⭐ ⭐ ⭐</option>
            <option value="3">⭐ ⭐ ⭐</option>
            <option value="2">⭐ ⭐</option>
            <option value="1">⭐</option>
          </select>

          
          <textarea
            name="comment"
            value={newReview.comment}
            onChange={handleChange}
            placeholder="Write your review..."
            rows="3"
            className="w-full p-2 border rounded-md"
            required
          ></textarea>

          
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
     </div>
    </div>
  );
};

export default Review;
