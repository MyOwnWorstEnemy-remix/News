import React from "react";
// import Header from "components/layout/header/header";
import MainPage from "../../pages/main-page/main-page";
import {PieceOfNews} from "../../mocks/news";

type Props = {news: PieceOfNews[]};

// Обёртка для контента страниц
function PageWrapper({ news }: Props) {
  return (
    <>
      {/* <Header /> */}
      <MainPage news = {news}/>
    </>
  );
}

export default PageWrapper;
