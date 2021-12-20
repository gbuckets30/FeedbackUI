import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  let avg =
    feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;

  avg = avg.toFixed(1);

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackStats;
