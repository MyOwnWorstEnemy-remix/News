import React from "react";
import {PieceOfNews} from "../../mocks/news";
import styles from "./styles.module.css"; 

function News ( pieceOfNews: PieceOfNews ) {
    return (<>
        <h3 className={styles.newsTitle}>
            <a className={styles.newsLink} href={pieceOfNews.link}>{pieceOfNews.title}</a>
        </h3>
        <div className={styles.newsWrapper}>
            <p>{pieceOfNews.score} points by
                <a className={styles.newsLink} href="#">{pieceOfNews.author}</a>
            </p>
        </div>
    </>);
}

export default News;