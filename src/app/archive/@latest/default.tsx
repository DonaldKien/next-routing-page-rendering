import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/utils/news";
import { Fragment } from "react";

const PageLatestNews = () => {

  const latestNews = getLatestNews();

  return (
    <Fragment>
      <h1>Latest News Page</h1>
      <NewsList news={latestNews}/>
    </Fragment>
  );
};

export default PageLatestNews;
