import Head from 'next/head';

const rootUrl = 'https://ttpspodcast.com';

interface MetaProps {
  title: string;
  description: string;
  type: string;
  datePublished: string;
  dateModified: string;
  decentralized?: boolean;
}

export const Meta = (props: MetaProps) => {
  const {
    title,
    description,
    type,
    datePublished,
    dateModified,
    decentralized,
  } = props;
  const structuredData = {
    '@context': 'http://schema.org',
    '@type': type,
    mainEntityOfPage: {
      '@type': 'WebPage',
    },
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: `${rootUrl}/ttps_og.jpg`,
      height: 630,
      width: 1200,
    },
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: 'Chad $yntax',
    },
    // publisher: {
    //   '@type': '...',
    //   name: '...',
    //   logo: {
    //     '@type': 'ImageObject',
    //     url: '...',
    //     width: 600,
    //     height: 60,
    //   },
    // },
    description,
    keywords:
      'podcast web development software engineering educational technology weed talk show discussion',
  };
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Chad $yntax" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={rootUrl} />
      <meta property="og:image" content={`${rootUrl}/ttps_og.jpg`} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8WF6D29J5K"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8WF6D29J5K');
            gtag('config', 'UA-216162033-1');
          `,
        }}
      />
      {/* maybe one day will have podcast twitter acc */}
      {/* <meta name="twitter:site" content="@ttpspodcast"> */}
      <meta name="twitter:creator" content="@SyntaxChad"></meta>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href={`https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:ital,wght@0,300;0,400;0,700;1,300${
          decentralized ? '&family=Press+Start+2P' : ''
        }&family=Ubuntu:wght@300&display=swap`}
        rel="stylesheet"
      />
    </Head>
  );
};
