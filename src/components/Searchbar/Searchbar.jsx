import { Form, Formik } from 'formik';
import { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  IconButton,
  SearchContainer,
  SearchFormButton,
  SearchFormInput,
  SearchFormLabel,
} from './Searchbar.styled';

function Searchbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleSearch = () => setIsActive(!isActive);

  const navigate = useNavigate();

  const handleSearch = ({ search }, actions) => {
    if (search.trim() === '') {
      toast.error('Please enter a word to search for');
      return;
    }

    navigate(`movies?query=${encodeURIComponent(search)}`);
    actions.resetForm();
  };

  return (
    <SearchContainer isSearching={isActive}>
      {isActive ? (
        <Formik initialValues={{ search: '' }} onSubmit={handleSearch}>
          <Form>
            <SearchFormButton type="submit" value="submit">
              <AiOutlineSearch size={30} />
            </SearchFormButton>
            <SearchFormLabel htmlFor="search" />
            <SearchFormInput
              type="text"
              id="search"
              name="search"
              placeholder="Search"
              isSearching={isActive}
            />
          </Form>
        </Formik>
      ) : undefined}
      <IconButton onClick={toggleSearch}>
        {isActive ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineSearch size={30} />
        )}
      </IconButton>
    </SearchContainer>
  );
}

export default Searchbar;
