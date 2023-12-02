// import PropTypes from 'prop-types';

import GalleryItem from './GalleryItem/GalleryItem';
import { Container } from './GalleryList.styled';

function GalleryList({ data }) {
  return (
    <Container>
      {data.map(item => (
        <GalleryItem key={item.id} data={item} />
      ))}
    </Container>
  );
}

// GalleryList.propTypes = {
//   results: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       poster_path: PropTypes.string,
//       title: PropTypes.string.isRequired,
//     }).isRequired,
//   ).isRequired,
//   // title: PropTypes.string.isRequired,
//   loading: PropTypes.bool.isRequired,
//   onLoadMore: PropTypes.func.isRequired,
//   total: PropTypes.number.isRequired,
// };

export default GalleryList;
