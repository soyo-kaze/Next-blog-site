import "../public/styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
