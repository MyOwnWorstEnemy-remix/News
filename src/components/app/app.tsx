import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import styles from "./styles.module.css";
import news from "../mocks/news";
import comments from "../mocks/comments"

function App() {
  return (
    <>
      <div className={styles.bodyWrapper}>
        <PageWrapper news = {comments}/>
      </div>
    </>
  );
}

export default App;
