import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';

import fetch from './fetch';

const useDataFetching = (endpoint, searchIn, initialPage = 1) => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(searchIn);

  const fetchData = useCallback(() => {
    setLoading(true);

    fetch(endpoint, search, page)
      .then(newData => {
        setTotal(newData.total_results);
        setResults(previousResults =>
          page === 1
            ? newData.results
            : [...previousResults, ...newData.results],
        );
        setLoading(false);
        return newData;
      })
      .catch(error => {
        toast.error(`Error fetching data: ${error.message}`);
        setLoading(false);
      });
  }, [endpoint, search, page]);

  const handleLoadMore = () => {
    setPage(previousPage => previousPage + 1);
  };

  useEffect(() => {
    if (search !== searchIn) {
      setPage(1);
      setResults([]);
      setSearch(searchIn);
    }
    fetchData();
  }, [searchIn, page, search, fetchData]);

  return {
    results,
    loading,
    total,
    handleLoadMore,
  };
};

export default useDataFetching;
