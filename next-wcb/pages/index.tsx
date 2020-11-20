import Head from 'next/head';
import { getPage } from '@/lib/pages';

export default function Home({ page }: any) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>NEXT JS FRONTEND</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        <p>{page.content.rendered}</p>
      </main>
    </div>
  );
}

export async function getStaticProps(ctx: any): Promise<{ props: any }> {
  const page = await getPage('hero');
  return { props: { page } };
}
