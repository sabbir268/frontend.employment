import App from 'next/app';
  
import { createWrapper } from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import initStore from '../store';

import '../styles/flaticon.css';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import '../styles/styles.scss';

import { library, config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Provider store={initStore}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

const makestore = () => initStore;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);