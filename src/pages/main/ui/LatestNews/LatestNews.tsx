import { NewsList } from '@/widgets/news/ui';
import styles from './styles.module.css';
import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
import { INews } from '@/entities/news';
import { useAppDispatch } from '@/app/appStore';
import { setCurrentNews } from '@/entities/news/model/newsSlice';
import { useNavigate } from 'react-router-dom';

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news));
    navigate(`/news/${news.id}`)
  }

  return (
    <section className={styles.section}>
      <NewsList type='banner'
         direction='row'
         news={data && data.news}
         viewNewsSlot={(news: INews) => <p onClick={() => navigateTo(news)}>view more...</p>}
         isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
