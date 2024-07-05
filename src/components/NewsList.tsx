import Link from "next/link";

const NewsList = ({ news }: any) => {
  return (
    <ul className="news-list">
      {news.map((newsItem: any) => {
        return (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.id}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;
