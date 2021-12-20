import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackForm({ handleAdd }) {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(10);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim().length > 10) {
      const newFeedback = {
        id: uuidv4(),
        text: review,
        rating: rating,
      };

      handleAdd(newFeedback);
      setReview('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect onChange={handleRatingChange} />
        <div className='input-group'>
          <input
            onChange={handleReviewChange}
            type='text'
            placeholder='Write a review'
            value={review}
          />
          <Button type='submit' isDisabled={review.trim().length < 10}>
            Send
          </Button>
        </div>
        {review.trim().length < 10 && review.trim().length > 0 && (
          <div className='message'>
            Review must contain at least 10 characters
          </div>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;
