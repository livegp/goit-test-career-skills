import { useEffect, useState, useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';

import GalleryList from '../components/GalleryList/GalleryList';
import Loader from '../components/Loader/Loader';
import { useGetAllQuery } from '../services/api';

function Catalog() {
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState([]);

  const queryOptions = useMemo(() => ({ page, limit: 12 }), [page]);
  const { data, error, isLoading, isSuccess, refetch } = useGetAllQuery(
    queryOptions,
    { refetchOnMountOrArgChange: false },
  );

  useEffect(() => {
    if (error) {
      toast.error(`An error occurred while receiving data: ${error.message}`);
    }

    if (data) {
      setAllData(previousData =>
        data.length > 0 ? [...previousData, ...data] : previousData,
      );
    }
  }, [error, data]);

  useEffect(() => {
    refetch(queryOptions);
  }, [page, refetch, queryOptions]);

  const handleLoadMoreAndRefetch = useCallback(() => {
    setPage(previousPage => previousPage + 1);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {isSuccess && allData.length > 0 && (
        <GalleryList data={allData} handleLoadMore={handleLoadMoreAndRefetch} />
      )}
    </>
  );
}

export default Catalog;
