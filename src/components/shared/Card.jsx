import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  const styles = {
    backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
    color: reverse ? '#fff' : '#000',
  };

  return (
    <div className='card' style={styles}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

Card.defaultProps = {
  reverse: false,
};

export default Card;
