import styles from './styles.module.css';

const Pagination = ({
  totalPages,
  handleNextPage,
  handlePageClick,
  handlePreviousPage,
  currenPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currenPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              disabled={index + 1 === currenPage}
              key={index}
              className={styles.pageNumber}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <button
        disabled={currenPage >= totalPages}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
