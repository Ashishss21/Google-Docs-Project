import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";
import { Provider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
  <Provider session={pageProps.session}>
    <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
