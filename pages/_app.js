import "../public/styles/global.css";
// import { DataProvider } from "../components/dataContext";
import Layout from "../components/Layout";
import { wrapper } from "../store/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(MyApp);
