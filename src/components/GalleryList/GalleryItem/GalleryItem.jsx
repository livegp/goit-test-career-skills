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
  data: PropTypes.shape({
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
};

export default GalleryItem;
