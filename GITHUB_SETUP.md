# Push to GitHub - Manual Steps

Your code is ready to push! Follow these steps:

## Option 1: Using GitHub CLI (Recommended)

If you have GitHub CLI installed:

```bash
cd /home/f4mcb401/Desktop/project/datahive
gh auth login
git push -u origin main
```

## Option 2: Using Personal Access Token

1. Generate a token:
   - Go to https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name it "datahive-deployment"
   - Select scopes: `repo` (full control)
   - Generate and copy the token

2. Push with token:

```bash
cd /home/f4mcb401/Desktop/project/datahive
git push https://YOUR_TOKEN@github.com/mohakamran/data-hive.git main
```

Replace `YOUR_TOKEN` with your actual token.

## Option 3: Using SSH (Most Secure)

1. Set up SSH key (if not already):
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   eval "$(ssh-agent -s)"
   ssh-add ~/.ssh/id_ed25519
   ```

2. Add SSH key to GitHub:
   - Copy public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to https://github.com/settings/keys
   - Click "New SSH key"
   - Paste and save

3. Update remote:
   ```bash
   cd /home/f4mcb401/Desktop/project/datahive
   git remote set-url origin git@github.com:mohakamran/data-hive.git
   git push -u origin main
   ```

## After Pushing

Once pushed, deploy to GitHub Pages:

```bash
npm run deploy
```

Then go to:
- Repository Settings → Pages
- Select `gh-pages` branch as source
- Save

Your site will be live at: **https://mohakamran.github.io/data-hive**

## Files Already Configured

✅ `vite.config.ts` - Base path set to `/data-hive/`
✅ `package.json` - Homepage URL configured
✅ `gh-pages` - Deployment package installed
✅ All code committed and ready

Just need to push and deploy! 🚀

