import { Bars } from 'react-loader-spinner';

import Container from './Loader.styled';

function Loader() {
  return (
    <Container>
      <Bars
        height="40"
        width="40"
        color="#3470FF"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible
      />
    </Container>
  );
}

export default Loader;
