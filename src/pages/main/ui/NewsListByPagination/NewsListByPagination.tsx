import { TOTAL_PAGES } from '@/shared/constants/constants';
import PaginationWrapper from '@/features/pagination/ui/Pagination/Pagination';
import { NewsList } from '@/widgets/news/ui';
import { IFilters } from '@/shared/Interfaces';
import { INews } from '@/entities/news';
import { usePaginationNews } from '../../utils/hooks/usePaginationNews';

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean
}

const NewsListByPagination = ({filters, news, isLoading}: Props) => {

  const {handleNextPage, handlePageClick, handlePreviousPage} = usePaginationNews(filters)

  return (
       <PaginationWrapper
        top
        bottom
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList type='item' direction='column' isLoading={isLoading} news={news} />
      </PaginationWrapper>
  );
};

export default NewsListByPagination;
