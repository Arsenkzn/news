import styles from './styles.module.css';
import withSkeleton from '@/shared/hocs/withSkeleton';
import { INews } from '@/entities/news';
import NewsCard from '@/entities/news/ui/NewsCard/NewsCard';
import { ReactNode } from 'react';

interface Props {
  type?: "banner" | "item";
  news?: INews[];
  direction?: 'row' | 'column';
  viewNewsSlot?: (news: INews) => ReactNode
}

const NewsList = ({ news, type = 'item', viewNewsSlot }: Props) => {
  return (
    <ul className={`${type === 'item' ? styles.item : styles.banner}`}>
      {news?.map((item) => {
        return <NewsCard key={item.id} viewNewsSlot={viewNewsSlot} item={item} type={type} />;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
