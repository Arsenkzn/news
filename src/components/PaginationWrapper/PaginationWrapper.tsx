import { IPaginationProps } from '@/Interfaces';
import Pagination from '../Pagination/Pagination';

interface Props {
  top?: boolean;
  children: React.ReactNode;
  bottom?: boolean;
}

const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;
