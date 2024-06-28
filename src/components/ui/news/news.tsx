import React from "react";
import { Link } from "react-router-dom";
import {PieceOfNews} from "../../mocks/news";
import styles from "./styles.module.css"; 

function News ( pieceOfNews: PieceOfNews ) {
    return (<>
        <h3 className={styles.newsTitle}>
            <a className={styles.newsLink} href={pieceOfNews.link}>{pieceOfNews.title}</a>
        </h3>
        <div className={styles.newsWrapper}>
            <p className={styles.newsScore}>{pieceOfNews.score} points by <a className={styles.newsLink} href="#">{pieceOfNews.author}</a></p>
            <Link className={styles.newsLink} to={`/comment:${pieceOfNews.commentId}`}>comments</Link>
        </div>
    </>);
}

export default News;