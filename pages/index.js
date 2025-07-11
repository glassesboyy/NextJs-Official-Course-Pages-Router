import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm a passionate Front-End Website Developer.</p>
        <p>
          I craft modern, responsive, and high-performing websites with a strong
          focus on user experience and clean code. From landing pages to complex
          web applications, I bring ideas to life through code and creativity.
        </p>
        <p>
          (This is a demo website — you'll learn how to build a site like this
          by following the official{" "}
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js tutorial
          </a>
          .)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <div className={utilStyles.searchContainer}>
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={utilStyles.searchInput}
          />
        </div>

        {filteredPosts.length === 0 ? (
          <p className={utilStyles.noResults}>
            No blog posts found matching your search.
          </p>
        ) : (
          <ul className={utilStyles.list}>
            {filteredPosts.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Layout>
  );
}
