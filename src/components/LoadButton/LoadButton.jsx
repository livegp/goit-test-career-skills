import PropTypes from 'prop-types';

import Button from './LoadButton.styled';

function LoadButton({ onLoadMore }) {
  return <Button onClick={onLoadMore}>Load more</Button>;
}

LoadButton.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadButton;
