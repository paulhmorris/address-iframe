import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export const config = {
  unstable_runtimeJS: false,
};
