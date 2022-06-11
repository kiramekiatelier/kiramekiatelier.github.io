import Head from "next/head";
import "normalize.css/normalize.css";
import "../styles/globals.scss";
import { THEME_COLOR } from "../lib/constants";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
                <meta name="theme-color" content={THEME_COLOR} />
                <link rel="icon" href="/favicon.ico" />
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
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color={THEME_COLOR}
                />
                <meta name="msapplication-TileColor" content={THEME_COLOR} />
                <meta
                    name="msapplication-config"
                    content="/browserconfig.xml"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
