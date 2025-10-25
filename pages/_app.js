import { AppProvider } from '@shopify/polaris';
import { Provider as AppBridgeProvider } from '@shopify/app-bridge-react';
import '@shopify/polaris/build/esm/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <AppBridgeProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AppBridgeProvider>
  );
}
