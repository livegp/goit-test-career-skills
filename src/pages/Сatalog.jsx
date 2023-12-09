import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import GalleryList from '../components/GalleryList/GalleryList';
import Loader from '../components/Loader/Loader';
import { api, useGetAllQuery } from '../services/api';

function Catalog() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isSuccess } = useGetAllQuery({
    page,
    limit: 12,
  });

  useEffect(() => {
    error &&
      toast.error(`An error occurred while receiving data: ${error.message}`);
  }, [error]);

  useEffect(() => () => dispatch(api.util.resetApiState()), [dispatch]);

  const handleLoadMore = useCallback(() => {
    setPage(previousPage => previousPage + 1);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && data?.length > 0 && (
        <GalleryList
          data={data}
          isSuccess={isSuccess}
          handleLoadMore={handleLoadMore}
        />
      )}
    </>
  );
}

export default Catalog;
