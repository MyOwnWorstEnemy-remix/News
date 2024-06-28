import React from "react";
import styles from "./styles.module.css"; 
import Comments from "../../ui/comments/comments";
import {Comment} from "../../mocks/comments";

type Props = {comments: Comment[]};

function CommentList({ comments }: Props) {
  return comments ? (
      <ul className={styles.list}>
        {comments.map((comment) => (
          <li className={styles.listItem} key={comment.id}>
            <Comments {...comment} />
          </li>
        ))}
      </ul>
    ) : null;
}

export default CommentList;
