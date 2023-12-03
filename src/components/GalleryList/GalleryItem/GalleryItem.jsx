import PropTypes from 'prop-types';
import { FaCar } from 'react-icons/fa';

import { Box, Container, ImgBox, SubTitle, Title } from './GalleryItem.styled';
import Checkbox from '../../Checkbox/Checkbox';
import LoadMoreButton from '../../LoadMoreButton/LoadMoreButton';

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

  const addressWords = address.split(',');
  const city = addressWords[1].trim();
  const country = addressWords[2] ? addressWords[2].trim() : '';
  const firstFunctionality = functionalities[0];

  return (
    <Container>
      <Checkbox />
      <div>
        <ImgBox>
          {img ? (
            <img src={img} width={250} alt={make} role="presentation" />
          ) : (
            <FaCar />
          )}
        </ImgBox>
        <Box>
          <Title>
            <p>
              {make} <span>{model}</span>, {year}
            </p>
            <p>{rentalPrice}</p>
          </Title>
          <SubTitle>
            {city} | {country} | {rentalCompany} | {type} | {mileage} |{' '}
            {firstFunctionality}
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
