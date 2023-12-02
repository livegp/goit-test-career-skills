import PropTypes from 'prop-types';

import { Box, Container, SubTitle, Title } from './GalleryItem.styled';
import LoadMoreButton from '../../LoadMoreButton/LoadMoreButton';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

function GalleryItem({ data }) {
  console.log('data', data);
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

  const addressWords = address.split(',');
  const city = addressWords[1].trim();
  const country = addressWords[2] ? addressWords[2].trim() : '';

  const url = img ? `${img}` : defaultImg;

  return (
    <Container>
      <div>
        <img src={url} width={250} alt={make} role="presentation" />
        <Box>
          <Title>
            <p>
              {make}, {year}
            </p>
            <p>{rentalPrice}</p>
          </Title>
          <SubTitle>
            {city} | {country} | {rentalCompany} | {type} | {model} | {mileage}{' '}
            | {functionalities}{' '}
          </SubTitle>
        </Box>
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
