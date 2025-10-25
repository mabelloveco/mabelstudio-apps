import { Page, Layout, Card, Button, Text } from '@shopify/polaris';
import { useAppBridge } from '@shopify/app-bridge-react';

export default function Home() {
  const app = useAppBridge();

  return (
    <Page title="Free Gift Tiers">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Text variant="headingMd" as="h2">
              Welcome to Free Gift Tiers
            </Text>
            <Text variant="bodyMd" as="p">
              Set up automatic gift tiers based on customer spend thresholds.
            </Text>
            <Button primary>Get Started</Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
