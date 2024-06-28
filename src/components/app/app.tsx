import React from "react";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ScrollTop from "../ui/scroll-top/scroll-top";
import styles from "./styles.module.css";
import news from "../mocks/news";
import comments from "../mocks/comments"
import MainPage from "components/pages/main-page/main-page";
import CommentPage from "components/pages/comment-page/comment-page";
import {Comment} from "../mocks/comments";

type CommentsType = {comments: Comment[]};

function CommentOr404({ comments }: CommentsType) {
  const { code } = useParams();
  const comment = comments.find((comment) => comment.id.toString() === code);
  return comment ? (
    <CommentPage {...comment} />
  ) : (
    <h1>404 страница не найдена</h1>
  );
}

function App() {
  return (
    <>
      <div className={styles.bodyWrapper}>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<MainPage news={news} />} />
          <Route path="comment">
            <Route path=":id" element={<CommentOr404 comments={comments} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
