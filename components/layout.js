import Head from "next/head";
import { useContext } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SakraDev Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-team-1">
        <Navbar />
      </header>
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
