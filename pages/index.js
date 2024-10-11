import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Parsons Lecture</title>
        <meta name="description" content="Parsons Lecture Next.js App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Parsons Lecture</h1>
        <p>This is a test page to ensure proper deployment.</p>
      </main>
    </div>
  );
}
