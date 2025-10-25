#!/bin/bash

# Shopify App Deployment Script
echo "🚀 Starting Shopify App deployment..."

# Check if we're on the right branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ] && [ "$CURRENT_BRANCH" != "chore/review-prep" ]; then
    echo "❌ Please switch to main or chore/review-prep branch"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run security checks
echo "🔒 Running security checks..."
npm audit --audit-level moderate

# Build the application
echo "🏗️ Building application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Commit and push changes
echo "📤 Pushing to GitHub..."
git add .
git commit -m "chore: automated deployment $(date)"
git push origin $CURRENT_BRANCH

echo "✅ Deployment initiated!"
echo "🔗 Check GitHub Actions: https://github.com/mabelloveco/mabelstudio-apps/actions"
echo "🌐 Netlify will auto-deploy from GitHub"
echo "📄 GitHub Pages will deploy legal pages automatically"
