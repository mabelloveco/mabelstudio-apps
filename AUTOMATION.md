# 🤖 Automation Setup Guide

## 🚀 **AUTOMATED DEPLOYMENT PIPELINE**

### **What's Automated**
- ✅ **GitHub Actions**: Auto-deploy to Netlify on push
- ✅ **GitHub Pages**: Auto-deploy legal pages
- ✅ **Security Checks**: Automated security validation
- ✅ **Build Process**: Automated build and test

### **Quick Start**
```bash
# Run automated deployment
./scripts/deploy.sh

# Setup Netlify (first time only)
./scripts/setup-netlify.sh
```

## 🔧 **SETUP INSTRUCTIONS**

### **1. GitHub Secrets (Required)**
Add these secrets in GitHub repository settings:

```
NETLIFY_AUTH_TOKEN=your_netlify_auth_token
NETLIFY_SITE_ID=your_netlify_site_id
```

### **2. Netlify Environment Variables**
Set these in Netlify dashboard:

```
SHOPIFY_API_KEY=your_api_key
SHOPIFY_API_SECRET=your_api_secret
SHOPIFY_WEBHOOK_SECRET=your_webhook_secret
SHOPIFY_APP_URL=https://free-gift-tiers.mabelstudio.co
SHOPIFY_SCOPES=write_products
BILLING_TEST_MODE=true
```

### **3. Enable GitHub Pages**
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)

## 🔄 **AUTOMATION WORKFLOWS**

### **On Push to Main/Chore Branch**
1. **Security Checks** → Run audit and secret detection
2. **Build Application** → npm run build
3. **Deploy to Netlify** → Automatic deployment
4. **Deploy Legal Pages** → GitHub Pages update

### **On Pull Request**
1. **Security Validation** → Check for secrets and vulnerabilities
2. **Build Test** → Ensure build passes
3. **Preview Deployment** → Netlify preview URL

## 📊 **MONITORING**

### **GitHub Actions**
- **Status**: https://github.com/mabelloveco/mabelstudio-apps/actions
- **Logs**: Real-time deployment logs
- **Notifications**: Email on success/failure

### **Netlify Dashboard**
- **Deploys**: https://app.netlify.com/sites/free-gift-tiers
- **Functions**: Serverless function logs
- **Analytics**: Performance metrics

## 🛠️ **MANUAL OVERRIDE**

If automation fails, run manually:

```bash
# Deploy to Netlify manually
netlify deploy --prod

# Deploy legal pages manually
gh-pages -d . -b gh-pages
```

## ✅ **VERIFICATION CHECKLIST**

After automation setup:
- [ ] GitHub Actions running successfully
- [ ] Netlify site deployed and accessible
- [ ] Custom domain configured
- [ ] Environment variables set
- [ ] Legal pages accessible via GitHub Pages
- [ ] Security checks passing

## 🚨 **TROUBLESHOOTING**

### **Common Issues**
1. **Build Fails**: Check Node.js version (20+)
2. **Deploy Fails**: Verify Netlify secrets
3. **Domain Not Working**: Check DNS settings
4. **Environment Variables**: Verify in Netlify dashboard

### **Support**
- **GitHub Issues**: Create issue in repository
- **Netlify Support**: https://docs.netlify.com
- **Shopify Docs**: https://shopify.dev/docs/apps
