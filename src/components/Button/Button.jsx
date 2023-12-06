import PropTypes from 'prop-types';

import ButtonStyled from './Button.styled';

function Button({ title, handleLoadMore }) {
  return <ButtonStyled onClick={handleLoadMore}>{title}</ButtonStyled>;
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
