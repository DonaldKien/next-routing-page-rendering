import { Fragment } from "react";
import { DUMMY_NEWS } from "@/data/dummy-news";
import NewsList from "@/components/NewsList";

const PageNews = () => {
  return (
    <Fragment>
      <h1>Page News</h1>
      <NewsList news={DUMMY_NEWS}/>
    </Fragment>
  );
};

export default PageNews;
