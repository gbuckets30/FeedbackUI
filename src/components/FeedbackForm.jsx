import { useState } from 'react';
import Button from './shared/Button';
import Card from './shared/Card';

function FeedbackForm() {
  const [review, setReview] = useState('');

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
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
