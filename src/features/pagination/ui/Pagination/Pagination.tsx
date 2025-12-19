import { IPaginationProps } from '../../model/types';
import PaginationButtons from '../PaginationButtons/PaginationButtons';


interface Props {
  top?: boolean;
  children: React.ReactNode;
  bottom?: boolean;
}

const Pagination = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
};

export default Pagination;
