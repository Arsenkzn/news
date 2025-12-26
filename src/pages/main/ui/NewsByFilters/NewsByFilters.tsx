import styles from './styles.module.css';
import { useDebounce } from '@/shared/hooks/useDebounce';
import NewsFilters from '@/widgets/news/ui/NewsFilters/NewsFilters';
import { useAppSelector } from '@/app/appStore';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import NewsListByPagination from '../NewsListByPagination/NewsListByPagination';

const NewsByFilters = () => {

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data } = useGetCategoriesQuery(null);

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListByPagination isLoading={isLoading} news={news} filters={filters}/>
    </section>
  );
};

export default NewsByFilters;
