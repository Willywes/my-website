import 'bootstrap/dist/css/bootstrap.css';
import '../assets/scss/theme.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { APP_CONFIG } from '../config';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <title>{APP_CONFIG.APP_TITLE}</title>

                <link rel="manifest" href="/favicon/manifest.json" />
                <link rel="shortcut icon" href="/favicon" />
                <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/favicon/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/favicon/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/favicon/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/favicon/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/favicon/android-icon-192x192.png"
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />

                <meta name="description" content={APP_CONFIG.APP_DESCRIPTION} />
                <meta name="keywords" content={APP_CONFIG.APP_KEYWORDS} />
                <meta name="author" content={APP_CONFIG.APP_AUTHOR} />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                {/*<meta name="google-site-verification" content={APP_CONFIG.GOOGLE_SITE_VERIFICATION}/>*/}
                {/*<meta name="msvalidate.01" content={APP_CONFIG.MICROSOFT_SITE_VERIFICATION}/>*/}
                {/*<meta name="yandex-verification" content={APP_CONFIG.YANDEX_SITE_VERIFICATION}/>*/}
                {/*<meta name="alexaVerifyID" content={APP_CONFIG.ALEXA_SITE_VERIFICATION}/>*/}
                {/*<meta name="norton-safeweb-site-verification" content={APP_CONFIG.NORTON_SITE_VERIFICATION}/>*/}

                <meta property="og:title" content={APP_CONFIG.APP_TITLE} />
                <meta property="og:description" content={APP_CONFIG.APP_DESCRIPTION} />
                <meta property="og:image" content={APP_CONFIG.APP_RRSS_IMAGE} />
                <meta property="og:url" content={APP_CONFIG.APP_URL} />
                <meta property="og:site_name" content={APP_CONFIG.APP_TITLE} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="es_CL" />
                <meta property="fb:app_id" content={APP_CONFIG.FACEBOOK_APP_ID} />
                {/*<meta property="fb:admins" content={APP_CONFIG.FACEBOOK_ADMIN_ID}/>*/}
                <meta property="fb:pages" content={APP_CONFIG.FACEBOOK_PAGE_ID} />
                <meta property="og:email" content={APP_CONFIG.APP_EMAIL} />
                <meta property="og:phone_number" content={APP_CONFIG.APP_PHONE} />
                {/*<meta property="og:fax_number" content={APP_CONFIG.APP_FAX}/>*/}
                {/*<meta property="og:latitude" content={APP_CONFIG.APP_LATITUDE}/>*/}
                {/*<meta property="og:longitude" content={APP_CONFIG.APP_LONGITUDE}/>*/}
                {/*<meta property="og:street-address" content={APP_CONFIG.APP_STREET_ADDRESS}/>*/}

                <meta name="twitter:card" content="summary" />
                {/*<meta name="twitter:site" content={APP_CONFIG.TWITTER_SITE}/>*/}
                {/*<meta name="twitter:creator" content={APP_CONFIG.TWITTER_CREATOR}/>*/}
                <meta name="twitter:title" content={APP_CONFIG.APP_TITLE} />
                <meta name="twitter:description" content={APP_CONFIG.APP_DESCRIPTION} />
                <meta name="twitter:image" content={APP_CONFIG.APP_RRSS_IMAGE} />
                <meta name="twitter:image:alt" content={APP_CONFIG.APP_TITLE} />
                <meta name="twitter:domain" content={APP_CONFIG.APP_URL} />
                <meta name="twitter:app:name:iphone" content={APP_CONFIG.APP_TITLE} />
                <meta name="twitter:app:name:ipad" content={APP_CONFIG.APP_TITLE} />
                <meta name="twitter:app:name:googleplay" content={APP_CONFIG.APP_TITLE} />
                {/*<meta name="twitter:app:id:iphone" content={APP_CONFIG.APP_ID}/>*/}
                {/*<meta name="twitter:app:id:ipad" content={APP_CONFIG.APP_ID}/>*/}
                {/*<meta name="twitter:app:id:googleplay" content={APP_CONFIG.APP_ID}/>*/}
                <meta name="twitter:app:url:iphone" content={APP_CONFIG.APP_URL} />
                <meta name="twitter:app:url:ipad" content={APP_CONFIG.APP_URL} />
                <meta name="twitter:app:url:googleplay" content={APP_CONFIG.APP_URL} />

                <meta name="application-name" content={APP_CONFIG.APP_TITLE} />
                <meta name="msapplication-tooltip" content={APP_CONFIG.APP_DESCRIPTION} />
                <meta name="msapplication-starturl" content="/" />
                <meta name="msapplication-navbutton-color" content="#ffffff" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
                <meta name="msapplication-square70x70logo" content="/favicon/ms-icon-70x70.png" />
                <meta
                    name="msapplication-square150x150logo"
                    content="/favicon/ms-icon-150x150.png"
                />
                <meta name="msapplication-wide310x150logo" content="/favicon/ms-icon-310x150.png" />
                <meta
                    name="msapplication-square310x310logo"
                    content="/favicon/ms-icon-310x310.png"
                />

                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content={APP_CONFIG.APP_TITLE} />
                <meta name="format-detection" content="telephone=no" />
                <meta name="format-detection" content="address=no" />
                <meta name="format-detection" content="email=no" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="MobileOptimized" content="320" />

                {/*<!-- Google tag (gtag.js) -->*/}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-2M556BVN2G" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2M556BVN2G');
        `
                    }}
                />
            </Head>
            <GoogleReCaptchaProvider
                reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
                scriptProps={{
                    async: false, // optional, default to false,
                    defer: true, // optional, default to false
                    appendTo: 'head', // optional, default to "head", can be "head" or "body",
                    nonce: undefined
                }}
                container={{
                    parameters: {
                        theme: 'dark'
                    }
                }}
            >
                <Component {...pageProps} />
            </GoogleReCaptchaProvider>
        </>
    );
}

export default App;
