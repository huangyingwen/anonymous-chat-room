import type { AppProps } from 'next/app';
import '@livekit/components-styles';
// import '@/styles/components-styles';
import '@livekit/components-styles/prefabs';
// import '@/styles/general/index.css'
import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import TopBar from '@/components/TopBar';
import Script from 'next/script';
import '../i18n/config'; // 引用配置文件
// TODO修改下面的相关信息
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="CSSC 视频会议系统"
        titleTemplate="%s"
        defaultTitle="CSSC 视频会议系统"
        description="CSSC 视频会议系统"
        additionalMetaTags={[
          {
            property: 'theme-color',
            content: '#070707',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/images/livekit-apple-touch.png',
            sizes: '180x180',
          },
          {
            rel: 'mask-icon',
            href: '/images/livekit-safari-pinned-tab.svg',
            color: '#070707',
          },
        ]}
      />
      <TopBar />
      <Component {...pageProps} />
      {/* <Script src="https://www.WebRTC-Experiment.com/RecordRTC.js"></Script> */}
      {process.env.NEXT_PUBLIC_USE_SHAREVIDEO && (
        <Script
          type="text/javascript"
          src="https://cdn.staticfile.org/flv.js/1.6.2/flv.min.js"
        ></Script>
      )}
      {process.env.NEXT_PUBLIC_USE_SHAREVIDEO && (
        <Script
          type="text/javascript"
          src="https://npm.elemecdn.com/hls.js/dist/hls.min.js"
        ></Script>
      )}
    </>
  );
}

export default MyApp;
