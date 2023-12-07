import { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';

import GalleryList from '../components/GalleryList/GalleryList';
import Loader from '../components/Loader/Loader';
import { useGetAllQuery } from '../services/api';

function Catalog() {
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState([]);

  const queryOptions = useMemo(() => ({ page, limit: 12 }), [page]);
  const { data, error, isLoading, isSuccess } = useGetAllQuery(queryOptions);

  useEffect(() => {
    if (error) {
      toast.error(`An error occurred while receiving data: ${error.message}`);
    }

    if (data && data.length > 0) {
      setAllData(previousData => [...previousData, ...data]);
    }
  }, [error, data]);

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
