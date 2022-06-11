import Head from "next/head";
import {
    TWITTER_UN,
    SITE_URL,
    SITE_TITLE,
    META_DESC
} from "../../../lib/constants";

function IndexMeta() {
    return (
        <Head>
            <title>{SITE_TITLE}</title>
            <meta name="title" content={SITE_TITLE} />
            <meta name="description" content={META_DESC} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={SITE_URL} />
            <meta property="og:title" content={SITE_TITLE} />
            {/* <meta property="og:description" content={META_DESC} />
            <meta
                property="og:image"
                content={`${SITE_URL}img/home_banner.png`}
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={SITE_URL} />
            <meta property="twitter:title" content={SITE_TITLE} />
            <meta property="twitter:description" content={META_DESC} />
            <meta
                property="twitter:image"
                content={`${SITE_URL}img/home_banner.png`}
            />
            <meta property="twitter:creator" content={TWITTER_UN} /> */}
            {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&family=Quicksand:wght@300..700&display=swap"
                rel="stylesheet"
            /> */}
        </Head>
    );
}

export default IndexMeta;
