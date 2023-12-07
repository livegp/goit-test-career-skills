import { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';

import GalleryList from '../components/GalleryList/GalleryList';
import Loader from '../components/Loader/Loader';
import { useGetAllQuery } from '../services/api';

function Catalog() {
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState([]);

  const { data, error, isLoading, isSuccess } = useGetAllQuery({
    page,
    limit: 12,
  });

  useEffect(() => {
    error &&
      toast.error(`An error occurred while receiving data: ${error.message}`);
  }, [error]);

  useEffect(() => {
    data?.length > 0 && setAllData(previousData => [...previousData, ...data]);
  }, [data]);

  const handleLoadMore = useCallback(() => {
    setPage(previousPage => previousPage + 1);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && allData.length > 0 && (
        <GalleryList
          data={allData}
          isSuccess={isSuccess}
          handleLoadMore={handleLoadMore}
        />
      )}
    </>
  );
}

export default Catalog;
