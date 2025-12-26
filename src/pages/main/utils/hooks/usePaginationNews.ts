import { setFilters } from "@/entities/news/model/newsSlice";
import { TOTAL_PAGES } from "@/shared/constants/constants";
import { IFilters } from "@/shared/Interfaces";
import { useDispatch } from "react-redux";

export const usePaginationNews = (filters: IFilters) => {

      const dispatch = useDispatch();

      const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number + 1 })
      );
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }));
  };
  return {handleNextPage, handlePageClick, handlePreviousPage}
}