# YidPay Public Website

SMS payment platform built for the Jewish community.

## Deploy to Vercel (Free)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? `Y`
   - Which scope? Choose your account
   - Link to existing project? `N`
   - Project name? Press Enter (uses folder name)
   - Directory? `./` (press Enter)
   - Override settings? `N`

4. **Production Deployment**:
   ```bash
   vercel --prod
   ```

Your site will be live at: `https://your-project-name.vercel.app`

## Alternative: Deploy to Netlify (Free)

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the site**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy
   ```
   
   - Authorize Netlify
   - Create new site or link existing
   - Publish directory: `dist`

4. **Production Deploy**:
   ```bash
   netlify deploy --prod
   ```

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

Built files will be in the `dist` folder.
