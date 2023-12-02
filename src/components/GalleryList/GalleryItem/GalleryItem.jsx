import PropTypes from 'prop-types';

import Container from './GalleryItem.styled';

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
      <p>
        {make}, {year}, {rentalPrice}
      </p>
      <p>
        {address} | {rentalCompany} | {type} | {model} | {mileage} |{' '}
        {functionalities}{' '}
      </p>
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
