import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import GalleryList from '../components/GalleryList/GalleryList';
import useDataFetching from '../services/useDataFetching';

function Movies() {
  const [searchQuery, setSearchQuery] = useState();
  const location = useLocation();

  useEffect(() => {
    const searchParameters = new URLSearchParams(location.search);
    const query = searchParameters.get('query');
    if (query !== null) {
      setSearchQuery(previousQuery =>
        previousQuery === query ? previousQuery : query,
      );
    }
  }, [location]);

  const { results, loading, total, handleLoadMore } = useDataFetching(
    'searchMovies',
    searchQuery,
    1,
  );

  let title;
  if (searchQuery) {
    title = `Nothing was found for the search query "${searchQuery}".`;
    if (Array.isArray(results) && results.length > 0) {
      title = `You searched for "${searchQuery}"`;
    }
  } else {
    title = 'Enter a query to search';
  }

  return (
    <GalleryList
      results={results}
      title={title}
      loading={loading}
      onLoadMore={handleLoadMore}
      total={total}
    />
  );
}

export default Movies;
