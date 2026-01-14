# Voira — Real-Time AI Call Assistant for Fraud Reduction

Voira is a **real-time conversational AI** that answers calls when users don't pick up, then delivers **post-call analytics + notifications** (summary, recommended actions, fraud warnings) via **WebSocket** in under 2 seconds.

## Why Voira is Different

This is **not** a pre-spam filter. Users choose to route calls to Voira by simply not answering. This approach:
- ✅ Eliminates false positives — real calls never get blocked
- ✅ Gives users full control over their call protection
- ✅ Reduces fraud without frustrating legitimate callers

## Non-Negotiable Performance

| Metric | Target |
|--------|--------|
| Scale | Up to **10M calls/day** |
| Conversation latency | **≤ 200ms** |
| Post-call notification | **≤ 2 seconds** |

## Who We Serve

**Direct customers (who pay us):**
- Telcos and carriers
- Call protection / caller ID platforms (e.g., Truecaller-like apps)
- Pay-per-use pricing model

**End customers (who experience value):**
- Consumer users via subscription sold by telco/platform
- Premium plan bundles

---

## Project Info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy to GitHub Pages (Recommended for Production)

This project is configured for automatic deployment to GitHub Pages. Simply:

1. Push your code to GitHub
2. Enable GitHub Pages in repository Settings → Pages → Source: "GitHub Actions"
3. The site will automatically deploy on every push to `main` branch

**📖 [Read the complete deployment guide](./DEPLOYMENT.md)** for step-by-step instructions.

### Alternative: Deploy via Lovable

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share → Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

### For GitHub Pages Deployment

1. Add your domain in GitHub repository Settings → Pages → Custom domain
2. Configure DNS records at your domain provider (see [DEPLOYMENT.md](./DEPLOYMENT.md) for details)
3. Enable "Enforce HTTPS" once DNS verification completes

### For Lovable Deployment

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
