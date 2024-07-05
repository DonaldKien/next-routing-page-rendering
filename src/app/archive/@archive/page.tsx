import { Fragment } from "react";
import { getAvailableNewsYears } from "@/utils/news";
import Link from "next/link";

const PageArchive = () => {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default PageArchive;
