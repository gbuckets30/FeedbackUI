import { v4 as uuidv4 } from 'uuid';
import { useState, useContext, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(10);
  const { addFeedback, updateFeedback, feedbackEdit } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setReview(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim().length > 10) {
      if (feedbackEdit.edit === true) {
        const newFeedback = {
          id: feedbackEdit.item.id,
          text: review,
          rating: rating,
        };

        updateFeedback(newFeedback);
      } else {
        const newFeedback = {
          id: uuidv4(),
          text: review,
          rating: rating,
        };

        addFeedback(newFeedback);
      }

      setReview('');
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect initialRating={rating} onChange={handleRatingChange} />
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
