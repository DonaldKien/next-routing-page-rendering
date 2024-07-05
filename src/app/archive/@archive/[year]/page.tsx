import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/utils/news";

const PageArchiveYear = ({ params }: any) => {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  return <NewsList news={news} />;
};

export default PageArchiveYear;
