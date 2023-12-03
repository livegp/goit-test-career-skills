import { useEffect } from 'react';
import { toast } from 'react-toastify';

import GalleryList from '../components/GalleryList/GalleryList';
import Loader from '../components/Loader/Loader';
import { useGetAdvertsQuery } from '../services/advertsSlice';

function Сatalog() {
  const { data, error, isLoading } = useGetAdvertsQuery();

  useEffect(() => {
    if (error) {
      toast.error(`An error occurred while receiving data: ${error}`);
    }
  }, [error]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !error && <GalleryList data={data} />}
    </>
  );
}

export default Сatalog;
