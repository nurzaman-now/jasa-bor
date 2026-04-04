import Head from "next/head";
import { useRouter } from "next/router";

// Default value for some meta data
const defaultMeta = {
  title: "Jasa-Bor",
  siteName: "Jasa-Bor",
  description: "",
  url: "/",
  type: "website",
  robots: "follow, index",
  image: "/assets/card-image.png",
  author: "Nurz",
};

/**
 * Next Head component populated with necessary SEO tags and title
 * props field used:
 * - title
 * - siteName
 * - description
 * - url
 * - type
 * - robots
 * - image
 * - date
 * - author
 * - templateTitle
 * all field are optional (default value defined on defaultMeta)
 * @example
 * <SeoHead title="Page's Title" />
 */
const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@F2aldi" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta name="author" property="article:author" content={meta.author} />
        </>
      )}
      {/* Favicons — path mengikuti file di public/favicon/ */}
      {favicons.map((linkProps) => (
        <link
          key={`${linkProps.rel}-${linkProps.href}-${linkProps.sizes ?? ""}-${linkProps.type ?? ""}`}
          {...linkProps}
        />
      ))}
      {/* Windows 8 app icon */}
      <meta name="msapplication-TileColor" content="#EAB308" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/web-app-manifest-192x192.png"
      />
      {/* Accent color on supported browser */}
      <meta name="theme-color" content="#EAB308" />
    </Head>
  );
};

// Favicons, other icons, and manifest definition
const favicons = [
  {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicon/favicon.svg",
  },
  {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon/favicon.ico",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicon/favicon-96x96.png",
  },
  {
    rel: "apple-touch-icon",
    href: "/favicon/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/favicon/web-app-manifest-192x192.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "512x512",
    href: "/favicon/web-app-manifest-512x512.png",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

export default SeoHead;
