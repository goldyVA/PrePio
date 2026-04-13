# Premium Pioneers Sales Group — Website

A clean, multi-page website for **Premium Pioneers Sales Group (PPSG)** built with plain HTML, CSS, and JavaScript. No frameworks or build tools required. Ready for GitHub Pages.

---

## File Structure

```
premiumpioneers/
├── index.html          ← Home page
├── services.html       ← Services detail
├── partners.html       ← Partners directory (with category filter)
├── about.html          ← About & team
├── contact.html        ← Contact form
├── css/
│   ├── style.css       ← Design system, nav, footer (shared)
│   ├── home.css        ← Home page styles
│   ├── services.css    ← Services page styles
│   ├── partners.css    ← Partners page styles
│   ├── about.css       ← About page styles
│   └── contact.css     ← Contact page styles
├── js/
│   ├── main.js         ← Shared: nav injection, footer, scroll-reveal
│   └── partners.js     ← Partners page category filter
└── README.md
```

---

## Deploying to GitHub Pages

1. **Create a new repository** on GitHub (e.g. `premiumpioneers-site`).

2. **Upload all files**, keeping the folder structure intact.  
   You can drag and drop the entire folder into the GitHub web UI, or use git:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/YOUR_USERNAME/premiumpioneers-site.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**  
   Go to your repo → **Settings** → **Pages** → Source: **Deploy from branch** → Branch: `main` → folder: `/ (root)` → Save.

4. Your site will be live at:  
   `https://YOUR_USERNAME.github.io/premiumpioneers-site/`

---

## Customization

- **Colors & fonts** — edit `css/style.css` (`:root` variables at the top)
- **Nav & footer** — edit the `NAV_HTML` and `FOOTER_HTML` constants in `js/main.js`
- **Partners** — add or edit `.partner-card` blocks in `partners.html`
- **Contact form** — the form uses `mailto:` by default; for a real form backend, replace the `action` attribute with a service like [Formspree](https://formspree.io) or [Netlify Forms](https://www.netlify.com/products/forms/)

---

## Custom Domain (optional)

To use `www.premiumpioneers.com` instead of the default GitHub Pages URL:

1. Add a file named `CNAME` to the root of your repo with one line:
   ```
   www.premiumpioneers.com
   ```
2. In your domain registrar's DNS settings, add:
   - A CNAME record: `www` → `YOUR_USERNAME.github.io`
3. Back in GitHub Pages settings, enter your custom domain and enable **Enforce HTTPS**.

---

© 2025 Premium Pioneers, LLC
