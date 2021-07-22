import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Alert from '../../components/alert';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <style jsx>{`
        h2 {
          background-color: yellowgreen;
        }
      `}</style>
      <h1>First Post!</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
      <Alert type="success">hola</Alert>
      <Alert type="error">adios</Alert>
    </Layout>
  );
  // return (<><h1>First Post</h1><h2><a href="/">Back to home</a></h2></>)
}
