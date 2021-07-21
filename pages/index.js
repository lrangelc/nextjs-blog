import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi there, I'm Luis Rangel, a Full Stack Developer and a newbie on a loop 🚀 from Guatemala, currently, I'm a Team Member
          Rappid Design.
        </p>
        <p>
          <a href='https://www.twitter.com/luis_rangel_c' target='_blank'>
            <img align='left' alt="Luis's Twitter" width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg' />
            @luis_rangel_c
          </a>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
