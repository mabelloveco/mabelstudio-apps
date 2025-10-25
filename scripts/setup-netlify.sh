#!/bin/bash

# Netlify Setup Script
echo "🌐 Setting up Netlify deployment..."

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "📦 Installing Netlify CLI..."
    npm install -g netlify-cli
fi

# Login to Netlify
echo "🔐 Please login to Netlify..."
netlify login

# Create new site
echo "🏗️ Creating Netlify site..."
netlify sites:create --name free-gift-tiers

# Get site ID
SITE_ID=$(netlify sites:list --json | jq -r '.[0].site_id')
echo "🆔 Site ID: $SITE_ID"

# Set environment variables
echo "🔧 Setting environment variables..."
netlify env:set SHOPIFY_API_KEY "your_api_key_here"
netlify env:set SHOPIFY_API_SECRET "your_api_secret_here"
netlify env:set SHOPIFY_WEBHOOK_SECRET "your_webhook_secret_here"
netlify env:set SHOPIFY_APP_URL "https://free-gift-tiers.mabelstudio.co"
netlify env:set SHOPIFY_SCOPES "write_products"
netlify env:set BILLING_TEST_MODE "true"

# Set custom domain
echo "🌍 Setting custom domain..."
netlify domains:create free-gift-tiers.mabelstudio.co

# Enable HTTPS
echo "🔒 Enabling HTTPS..."
netlify ssl:create

echo "✅ Netlify setup complete!"
echo "🔗 Site URL: https://$SITE_ID.netlify.app"
echo "🌐 Custom domain: https://free-gift-tiers.mabelstudio.co"
echo "📋 Next steps:"
echo "   1. Update environment variables with real values"
echo "   2. Connect GitHub repository in Netlify dashboard"
echo "   3. Enable automatic deployments"
