# Deployment Guide - GitHub Pages

This guide will walk you through deploying your DataHive landing page to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your machine
- Node.js and npm installed

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top-right corner
3. Select "New repository"
4. Name it `datahive` (or your preferred name)
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

## Step 2: Initialize Git in Your Project

Run these commands in your terminal:

```bash
cd /home/f4mcb401/Desktop/project/datahive

# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: DataHive landing page"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/datahive.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important**: Replace `YOUR_USERNAME` with your actual GitHub username in the remote URL and in `package.json`.

## Step 3: Update package.json

Edit `package.json` and replace `YOUR_USERNAME` with your actual GitHub username:

```json
"homepage": "https://YOUR_USERNAME.github.io/datahive"
```

Also update `vite.config.ts` if your repository name is different from `datahive`.

## Step 4: Deploy to GitHub Pages

Run this command to build and deploy:

```bash
npm run deploy
```

This will:
1. Build your project
2. Create a `gh-pages` branch
3. Deploy the built files to GitHub Pages

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select `gh-pages` branch
5. Select the `/root` folder
6. Click "Save"

## Step 6: Access Your Live Site

After a few minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/datahive
```

## Future Updates

To update your deployed site after making changes:

```bash
# Make your changes
# ...

# Commit your changes
git add .
git commit -m "Update: description of changes"
git push

# Deploy updates
npm run deploy
```

## Troubleshooting

### 404 Error on GitHub Pages

- Make sure your repository name matches the `base` in `vite.config.ts`
- Ensure `gh-pages` branch is selected as the source
- Wait 5-10 minutes after deployment for changes to propagate

### Build Errors

- Check that all dependencies are installed: `npm install`
- Verify there are no TypeScript errors: `npm run build`

### Assets Not Loading

- Ensure `base: '/repository-name/'` in `vite.config.ts` matches your repository name
- Check that paths don't start with `/` in your code (use relative paths)

## Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file in the `public` folder:
   ```
   yourdomain.com
   ```

2. Deploy again: `npm run deploy`

3. Configure DNS settings with your domain provider to point to GitHub Pages

## Support

For issues with deployment, check:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Your DataHive landing page is now live! 🚀**

