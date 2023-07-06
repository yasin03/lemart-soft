import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>LemartSoft - IT Solutions & Technology Html5 Template</title>
        <link
          rel="icon"
          href="img/favicon.png"
          sizes="20x20"
          type="image/png"
        />
        /
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/animate.min.css" />
        <link rel="stylesheet" href="css/fontawesome.min.css" />
        <link rel="stylesheet" href="css/nice-select.min.css" />
        <link rel="stylesheet" href="css/magnific.min.css" />
        <link rel="stylesheet" href="css/slick.min.css" />
        <link rel="stylesheet" href="css/owl.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="js/jquery.min.js"></Script>
        <Script src="js/bootstrap.min.js"></Script>
        <Script src="js/fontawesome.min.js"></Script>
        <Script src="js/magnific.min.js"></Script>
        <Script src="js/nice-select.min.js"></Script>
        <Script src="js/slick.min.js"></Script>
        <Script src="js/owl.min.js"></Script>
        <Script src="js/counter-up.min.js"></Script>
        <Script src="js/waypoint.min.js"></Script>
        <Script src="js/wow.min.js"></Script>
        <Script src="js/main.js"></Script>
      </body>
    </Html>
  );
}
