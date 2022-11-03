// 毎回ページで読み込む設定 globalcssを読み込んだりする
import '../styles/destyle.css';
import '../styles/add.css';
import '../styles/sakura_earthly.css';
import '../styles/media_screen.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
