import React from "react";
import styles from "./styles.module.css"; 
// import classNames from "classnames";
import News from "../../ui/news/news";
// import { Ul, Li } from "/src/components/styled";
// import { Features, StyledButton, StyledTitle } from "./styles";
import {PieceOfNews} from "../../mocks/news";

type Props = {news: PieceOfNews[]};

function NewsList({ news }: Props) {
  const titleClass: string = styles.newsSection;
  return news && news.length ? (
    <section className={styles.newsSection}>
      {/* <h2 className={classNames(styles.sectionTitle)}>Новости</h2> */}
      <h2 className={styles.sectionTitle}>Новости</h2>
      <ul className={styles.list}>
        {news.map((pieceOfNews) => (
          <li className={styles.listItem} key={pieceOfNews.id}>
            <News {...pieceOfNews} />
          </li>
        ))}
      </ul>
    </section>
  ) : null;
}

export default NewsList;
