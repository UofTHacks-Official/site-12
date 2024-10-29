import "../styles/globals.css";
import type { AppProps } from "next/app";
import RootLayout from "../layout";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname !== "/") {
      router.push("/");
    }
  }, [router.pathname]);
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
