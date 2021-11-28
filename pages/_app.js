import "../public/styles/global.css";
import { DataProvider } from "../components/dataContext";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
};

export default MyApp;
