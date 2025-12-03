import { INews } from '@/Interfaces';
import styles from './styles.module.css';
import NewsItem from '../NewsItem/NewsItem';
import withSkeleton from '@/helpers/hocs/withSkeleton';

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

export default NewsListWithSkeleton;
