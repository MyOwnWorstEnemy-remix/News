import React from "react";
import styles from "./styles.module.css"; 
import {Comment} from "../../mocks/comments";
import Comments from "components/ui/comments/comments";

function CommentPage( comment: Comment) {
  return (
    <>
      <h2 className={styles.sectionTitle}>Комментарий </h2>
      <Comments {...comment}/>
    </>
  );
}

export default CommentPage;
