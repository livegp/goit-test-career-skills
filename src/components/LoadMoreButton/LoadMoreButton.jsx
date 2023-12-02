import PropTypes from 'prop-types';

import Button from './LoadMoreButton.styled';

function LoadMoreButton({ onLoadMore }) {
  return <Button onClick={onLoadMore}>Load more</Button>;
}

LoadMoreButton.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreButton;
