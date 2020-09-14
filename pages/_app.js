import App from 'next/app';
import Head from 'next/head';

import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import initStore from '../store';

import '../styles/flaticon.css';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import "react-phone-input-2/lib/style.css";

import '../styles/styles.scss';

import { library, config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={initStore}>
                <Head>
                    <title>Employment</title>
                    <script src={'https://maps.googleapis.com/maps/api/js?key=' + process.env.MAP_API + '&libraries=places'}></script>
                </Head>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

const makestore = () => initStore;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);