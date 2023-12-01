import PropTypes from 'prop-types';

import GalleryItem from './GalleryItem/GalleryItem';
import { Container } from './GalleryList.styled';
import LoadButton from '../LoadButton/LoadButton';
import Loader from '../Loader/Loader';

function GalleryList({ results, loading, onLoadMore, total }) {
  const showPoster = Array.isArray(results) && results.length > 0;
  return (
    <>
      {showPoster && (
        <Container>
          {results.map(post => (
            <GalleryItem key={post.id} post={post} />
          ))}
        </Container>
      )}
      {loading && <Loader />}
      {!loading && results.length < total && (
        <LoadButton onLoadMore={onLoadMore} />
      )}
    </>
  );
}

GalleryList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  // title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};

export default GalleryList;
