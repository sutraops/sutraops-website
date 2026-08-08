# SutraOps Solutions — Website

Professional multi-page website for **SutraOps Solutions** (SAP Consulting · Finance & Accounting · Intelligent Automation · Travel Services).

Built with plain **HTML + CSS + JavaScript** — no build tools, no dependencies. Deploys free on **GitHub Pages**.

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Homepage (hero, stats, services, contact band) |
| `about.html` | About Us — story, mission/vision/values, why choose us |
| `services.html` | Detailed services + Industries section |
| `contact.html` | Contact page with working enquiry form |
| `styles.css` | All styling / layout / responsive design |
| `script.js`  | Mobile menu, scroll highlight, animated stats |
| `assets/so-icon.png` | Your SO logo mark (transparent) — header + footer + favicon |
| `assets/logo-full.png` | Your full logo with tagline (transparent) |

> ⚠️ **Important:** Upload the whole `assets/` folder to GitHub too, otherwise the logo won't show.

## ✉️ Activate the contact form (free, no coding)

The form on `contact.html` is ready — you just need to connect it so submissions reach your inbox:

1. Go to **https://formspree.io** and create a **free account**.
2. Create a **new form**; it gives you a form ID like `xyzabcde`.
3. Open `contact.html`, find this line:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Replace **`YOUR_FORM_ID`** with your real ID and save.
5. Done — enquiries now arrive at **info.sutraops@gmail.com**.

*(Until you do this, the form layout works but won't send. Alternatively I can switch it to a Google Form.)*

## 🚀 Deploy on GitHub Pages (free)

1. Create a GitHub account → https://github.com
2. **New repository** → name it `sutraops-website` → **Public** → **Create**.
3. **Add file → Upload files**, drag in **all `.html` files, `styles.css`, `script.js`, `README.md` and the entire `assets` folder**, then **Commit changes**.
4. **Settings → Pages → Source: Deploy from a branch**.
5. **Branch = main**, **Folder = / (root)** → **Save**.
6. Wait ~1 minute. Live at:
   ```
   https://<your-username>.github.io/sutraops-website/
   ```

## ✏️ How to edit

- **Text / phone / email** → open the relevant `.html` file and edit the words directly.
- **Colours** → edit the variables at the top of `styles.css` (`:root { ... }`).
- **WhatsApp number** → search `919288223003` and replace across files.
- **Add a page** → copy any existing page, change the content, and add a nav link.

## 🔧 Notes

- All pages share the same header, footer and branding for a consistent look.
- Nav links now work across pages (Home · About · Services · Industries · Contact).
- Fully mobile-responsive (test by resizing the browser).
- Favicon already set from your logo.
- To use a custom domain (e.g. `www.sutraops.com`), add it under **Settings → Pages → Custom domain**.
