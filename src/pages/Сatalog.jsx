import { toast } from 'react-toastify';

import GalleryList from '../components/GalleryList/GalleryList';
import Loader from '../components/Loader/Loader';
import { useGetAdvertsQuery } from '../services/advertsSlice';

function Сatalog() {
  const { data, error, isLoading } = useGetAdvertsQuery();

  return (
    <>
      {isLoading && <Loader />}
      {error && <div>{toast.error('Error deleting contact:', error)}</div>}
      {!isLoading && !error && <GalleryList data={data} />}
    </>
  );
}

export default Сatalog;
