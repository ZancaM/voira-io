# Deploying Voira to GitHub Pages

This guide will walk you through deploying your Voira website to GitHub Pages step by step.

---

## Prerequisites

Before you begin, make sure you have:
- A GitHub account
- Git installed on your computer
- Your Web3Forms access key configured in `src/data/content.json`

---

## Step-by-Step Deployment Guide

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the repository details:
   - **Repository name**: `voira-ai-intelligent-call-insights` (or your preferred name)
   - **Description**: "Voira - AI Call Assistant for Fraud Detection"
   - **Visibility**: Choose Public or Private (GitHub Pages works with both)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

### Step 2: Initialize Git and Push Your Code

Open your terminal in the project directory and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files to git
git add .

# Commit your files
git commit -m "Initial commit: Voira AI Call Assistant"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/voira-ai-intelligent-call-insights.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important**: Replace `YOUR_USERNAME` with your actual GitHub username!

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** (top menu)
3. In the left sidebar, scroll down and click **"Pages"**
4. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"**
5. That's it! The workflow is already configured in `.github/workflows/deploy.yml`

### Step 4: Trigger the Deployment

The deployment happens automatically when you push to the `main` branch. Since you just pushed your code, the deployment should already be running!

To check the deployment status:
1. Go to the **"Actions"** tab in your GitHub repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Click on it to see the progress
4. Wait for it to complete (usually takes 2-3 minutes)

### Step 5: Access Your Live Website

Once the deployment is complete:

1. Go back to **Settings** → **Pages**
2. You'll see a message: **"Your site is live at https://YOUR_USERNAME.github.io/voira-ai-intelligent-call-insights/"**
3. Click the link or copy it to access your live website!

---

## Custom Domain Setup (Optional)

If you want to use a custom domain like `voira.io`:

### Step 1: Configure DNS at Your Domain Provider

Add these DNS records at your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare):

**For apex domain (voira.io):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### Step 2: Configure Custom Domain in GitHub

1. Go to your repository **Settings** → **Pages**
2. Under **"Custom domain"**, enter your domain: `voira.io`
3. Click **Save**
4. Wait for DNS check to complete (can take up to 24 hours)
5. Once verified, check **"Enforce HTTPS"**

### Step 3: Update Vite Config for Custom Domain

Since you're using a custom domain, the `base: '/'` in `vite.config.ts` is already correct!

---

## Updating Your Website

Whenever you want to update your website:

```bash
# Make your changes to the code

# Add the changed files
git add .

# Commit your changes
git commit -m "Update: description of your changes"

# Push to GitHub
git push
```

The website will automatically rebuild and redeploy within 2-3 minutes!

---

## Important: Base URL Configuration

### If deploying to username.github.io/repo-name

If your site will be at `https://YOUR_USERNAME.github.io/voira-ai-intelligent-call-insights/`, update `vite.config.ts`:

```typescript
base: '/voira-ai-intelligent-call-insights/',
```

### If using custom domain or root deployment

Keep the current setting:
```typescript
base: '/',
```

---

## Troubleshooting

### Deployment Failed

1. Check the **Actions** tab for error messages
2. Make sure all dependencies are in `package.json`
3. Try rebuilding locally first: `bun run build`

### Site Shows 404

1. Make sure GitHub Pages is enabled in Settings
2. Verify the `base` setting in `vite.config.ts` matches your deployment URL
3. Check that the workflow completed successfully in the Actions tab

### Images or Assets Not Loading

1. Make sure all assets are in the `public` folder
2. Reference them with absolute paths starting with `/` (e.g., `/favicon.ico`)
3. Check browser console for 404 errors

### Form Submissions Not Working

1. Make sure you've added your Web3Forms access key in `src/data/content.json`
2. Test the form after deployment
3. Check your email spam folder for submissions

---

## Quick Reference

**Repository URL Pattern:**
```
https://github.com/YOUR_USERNAME/voira-ai-intelligent-call-insights
```

**Default GitHub Pages URL Pattern:**
```
https://YOUR_USERNAME.github.io/voira-ai-intelligent-call-insights/
```

**Custom Domain (if configured):**
```
https://voira.io
```

---

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Custom Domain Setup Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## Support

If you run into any issues:
1. Check the GitHub Actions logs in the "Actions" tab
2. Review the troubleshooting section above
3. Check that all prerequisites are met
4. Verify your git and GitHub credentials are configured correctly

---

**That's it! Your Voira website is now live on the internet! 🎉**

