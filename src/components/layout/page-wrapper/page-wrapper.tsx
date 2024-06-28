import React from "react";
import MainPage from "../../pages/main-page/main-page";
import CommentPage from "../../pages/comment-page/comment-page";
// import {PieceOfNews} from "../../mocks/news";
import {Comment} from "../../mocks/comments";

type Props = {news: Comment[]};

// Обёртка для контента страниц
function PageWrapper({ news }: Props) {
  return (
    <>
      {/* <Header /> */}
      {/* <MainPage news = {news}/> */}
      <CommentPage comments={news}/>
    </>
  );
}

export default PageWrapper;
