import React, { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from "./styles.module.css"; 
import News from "../../ui/news/news";
import {PieceOfNews} from "../../mocks/news";

const LIMIT = 15;

type Props = {news: PieceOfNews[]};

function NewsList({ news }: Props) {

  const [postData, setPostData] = useState(news.slice(0, LIMIT));
  const [visible, setVisible] = useState(LIMIT);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = () => {
      const newLimit = visible + LIMIT;
      const dataToAdd = news.slice(visible, newLimit);
      console.log(newLimit);
      if (news.length > postData.length) {
          setTimeout(() => {
              setPostData(prevData => prevData.concat(dataToAdd));
          }, 1000);
          setVisible(newLimit);
      } else {
          setHasMore(false);
      }
  };

  return news && news.length ? (
    <section className={styles.newsSection}>
      {/* <h2 className={classNames(styles.sectionTitle)}>Новости</h2> */}
      <h2 className={styles.sectionTitle}>Новости</h2>
      <ul className={styles.list}>
        <InfiniteScroll
          dataLength={postData.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {postData.map((pieceOfNews) => (
            <li className={styles.listItem} key={pieceOfNews.id}>
              <News {...pieceOfNews} />
            </li>
          ))}
      
        </InfiniteScroll>  
      </ul>
    </section>
  ) : null;
}

export default NewsList;
