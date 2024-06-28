import React from "react";
import CommentList from "../../blocks/comment-list/comment-list";
import styles from "./styles.module.css"; 
import {Comment} from "../../mocks/comments";

type Props = {comments: Comment[]};

function CommentPage({ comments }: Props) {
  return (
    <>
      <h2 className={styles.sectionTitle}>Комментарии</h2>
      <CommentList comments = {comments}/>
    </>
  );
}

export default CommentPage;
