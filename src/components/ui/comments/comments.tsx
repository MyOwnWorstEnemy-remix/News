import React from "react";
import {Comment} from "../../mocks/comments";
import CommentList from "../../blocks/comment-list/comment-list";
import styles from "./styles.module.css"; 

function Comments ( comment: Comment ) {
    return (<>
        <section className={styles.commentSection}>
            <div className={styles.commentWrapper}>
                <a className={styles.commentLink} href={comment.authorLink}>{comment.author}</a>
                <p className={styles.commentScore}>score {comment.score}</p>
            </div>
            <p  className={styles.commentText}>{comment.text}</p>
            {comment.moreComments ? (
                <div className={styles.innerComments}>
                    <CommentList comments = {comment.moreComments}/>
                </div>
            ) : null}
         </section>
    </>);
}

export default Comments;