import React from "react";
import NewsList from "../../blocks/news-list/news-list";
import {PieceOfNews} from "../../mocks/news";

type Props = {news: PieceOfNews[]};

function MainPage({ news }: Props) {
  return (
    <>
      <NewsList news = {news}/>
    </>
  );
}

export default MainPage;
