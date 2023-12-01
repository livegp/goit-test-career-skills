import GalleryList from '../components/GalleryList/GalleryList';
import useDataFetching from '../services/useDataFetching';

function Сatalog() {
  const { results, loading, total, handleLoadMore } = useDataFetching(
    'trending',
    '',
    1,
  );

  return (
    <GalleryList
      results={results}
      loading={loading}
      onLoadMore={handleLoadMore}
      total={total}
    />
  );
}

export default Сatalog;
