import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import MenuContext from "../components/MenuContext";
import menus from "../data/menus";

function MyApp({ Component, pageProps }) {
  return (
    <MenuContext.Provider value={menus}>
      <Component {...pageProps} />
    </MenuContext.Provider>
  );
}

export default MyApp;
