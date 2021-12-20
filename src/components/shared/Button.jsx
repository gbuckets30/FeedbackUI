import PropTypes from 'prop-types';

function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  version: 'primary',
  isDisabled: false,
};

export default Button;
