import Head from "next/head";

const MainHead = () => {
  return (
    <Head>
      {/* Title */}
      <title>Isolant Aislantes</title>

      {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#14bef0"/>
        <meta name="msapplication-TileColor" content="#14bef0" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

export default MainHead;