import { DUMMY_NEWS } from "@/data/dummy-news";
import { notFound } from "next/navigation";
import { Fragment } from "react";

interface PageNewsDetailsProps {
  params: {
    id: string;
  };
}

const PageNewsDetails = ({ params }: PageNewsDetailsProps) => {
  const newsId = params.id;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.id === newsId);

  if (!newsItem) {
    return notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
};

export default PageNewsDetails;
