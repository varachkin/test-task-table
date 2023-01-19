import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import {Provider} from "react-redux";
import {setupStore} from "../store/store";

const store = setupStore();

const App = ({ Component, pageProps }: AppProps) => (
    <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Provider>
)
export default App