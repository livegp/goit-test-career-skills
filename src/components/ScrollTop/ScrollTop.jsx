import ScrollToTop from 'react-scroll-up';

import ScrollTopIcon from './ScrollTop.styled';

function ScrollTop() {
  return (
    <ScrollToTop showUnder={160}>
      <ScrollTopIcon />
    </ScrollToTop>
  );
}

export default ScrollTop;
