import { Formik } from 'formik';
import { toast } from 'react-toastify';

import {
  SearchForm,
  SearchFormInput,
  SearchFormLabel,
} from './FormFilter.styled';
import brands from '../../data/brand.json';
import Button from '../Button/Button';

const handleSearch = ({ search }) => {
  if (search.trim() === '') {
    toast.error('Please enter a word to search for');
  }
};

function FormFilter() {
  const title = 'Learn more';

  return (
    <Formik onSubmit={handleSearch}>
      <SearchForm>
        <SearchFormLabel htmlFor="brand" />
        <SearchFormInput id="brand" name="brand" as="select">
          <option value="">Enter the brand</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </SearchFormInput>
        <Button type="submit" value="submit" title={title} />
      </SearchForm>
    </Formik>
  );
}

export default FormFilter;
