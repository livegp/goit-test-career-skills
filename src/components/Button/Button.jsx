import PropTypes from 'prop-types';

import ButtonStyled from './Button.styled';

function Button({ title }) {
  return <ButtonStyled>{title}</ButtonStyled>;
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
