import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home">
      <h1>Next.js Routing & Page Rendering</h1>
      <Link href="/news">Page News</Link>
    </div>
  );
};

export default HomePage;
