import { useEffect } from 'react';
import { toast } from 'react-toastify';

import GalleryList from '../components/GalleryList/GalleryList';
import Loader from '../components/Loader/Loader';
import { useGetAllQuery } from '../services/api';

function Сatalog() {
  const { data, error, isLoading, isSuccess } = useGetAllQuery();

  useEffect(() => {
    if (error) {
      toast.error(`An error occurred while receiving data: ${error}`);
    }
  }, [error]);

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && <GalleryList data={data} />}
    </>
  );
}

export default Сatalog;
