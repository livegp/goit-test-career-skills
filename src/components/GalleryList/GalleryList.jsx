import PropTypes from 'prop-types';

import GalleryItem from './GalleryItem/GalleryItem';
import { Container } from './GalleryList.styled';
import Button from '../Button/Button';

function GalleryList({ data, handleLoadMore }) {
  return (
    <>
      <Container>
        {data?.map(item => (
          <GalleryItem key={item.id} data={item} />
        ))}
      </Container>
      <Button onClick={handleLoadMore}>Load more</Button>
    </>
  );
}

GalleryList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      year: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      img: PropTypes.string,
      description: PropTypes.string,
      fuelConsumption: PropTypes.string,
      engineSize: PropTypes.string,
      accessories: PropTypes.arrayOf(PropTypes.string),
      functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
      rentalPrice: PropTypes.string.isRequired,
      rentalCompany: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      rentalConditions: PropTypes.string,
      mileage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  handleLoadMore: PropTypes.func.isRequired,
};

export default GalleryList;
