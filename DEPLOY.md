# Deployment Instructions

## Option 1: GitHub Pages (Free & Easy)

1. Create a new repository on GitHub (go to github.com and click "New repository")
   - Name it something like "valentines-day" or "pooja-valentine"
   - Make it **public** (required for free GitHub Pages)
   - Don't initialize with README

2. Push your code to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Option 2: Netlify Drop (Easiest - No Git Required)

1. Go to https://app.netlify.com/drop
2. Drag and drop your entire project folder
3. Your site will be live instantly with a random URL
4. You can customize the domain name in settings

## Option 3: Vercel (Also Easy)

1. Go to https://vercel.com
2. Sign up/login
3. Click "Add New Project"
4. Import your Git repository or drag and drop the folder
5. Deploy!
