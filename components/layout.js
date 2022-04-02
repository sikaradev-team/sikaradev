import Head from "next/head";
import { useContext } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==
    "
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
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
