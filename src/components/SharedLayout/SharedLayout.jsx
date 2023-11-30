import { Wrappen } from './SharedLayout.styled';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';

function SharedLayout() {
  return (
    <Wrappen>
      <Header />
      <Main />
      <Footer />
    </Wrappen>
  );
}

export default SharedLayout;
