import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home|sikara-dev</title>
        
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
      </Head>
      <header className="bg-team-1">
        <Navbar />
      </header>
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
