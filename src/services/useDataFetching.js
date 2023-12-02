import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import fetch from './fetch';

const useDataFetching = (endpoint, initialPage = 1) => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const newData = await fetch(endpoint);
      setTotal(newData.total_results);
      setResults(previousResults =>
        page === 1 ? newData.results : [...previousResults, ...newData.results],
      );
    } catch (error) {
      toast.error(`Error fetching data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }, [endpoint, page]);

  const handleLoadMore = () => {
    setPage(previousPage => previousPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page, fetchData]);

  return {
    results,
    loading,
    total,
    handleLoadMore,
  };
};

export default useDataFetching;
