import PropTypes from 'prop-types';

import { Container, Title } from './GalleryItem.styled';
import LoadMoreButton from '../../LoadMoreButton/LoadMoreButton';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

function GalleryItem({ data }) {
  const {
    img,
    make,
    mileage,
    model,
    type,
    year,
    rentalPrice,
    address,
    rentalCompany,
    functionalities,
  } = data;

  const url = img ? `${img}` : defaultImg;

  return (
    <Container>
      <img src={url} width={250} alt={make} role="presentation" />
      <div>
        <Title>
          <p>
            {make}, {year}
          </p>
          <p>{rentalPrice}</p>
        </Title>
        <p>
          {address} | {rentalCompany} | {type} | {model} | {mileage} |{' '}
          {functionalities}{' '}
        </p>
      </div>
      <LoadMoreButton>Learn more</LoadMoreButton>
    </Container>
  );
}

GalleryItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default GalleryItem;
